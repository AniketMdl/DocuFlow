const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const RefreshToken = require('../models/RefreshToken');

const SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);
const ACCESS_EXPIRES = process.env.ACCESS_TOKEN_EXPIRES_IN || '15m';
const REFRESH_EXPIRES = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';

function generateAccessToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: ACCESS_EXPIRES,
  });
}

function generateRefreshToken() {
  return crypto.randomBytes(64).toString('hex');
}

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: 'Email already in use' });

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hash });
    await user.save();

    return res.status(201).json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error('Register error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateAccessToken(user);
    const refreshTokenString = generateRefreshToken();

    // Save refresh token to DB with expiry
    const expiresAt = new Date(Date.now() + parseDuration(REFRESH_EXPIRES));
    const refreshToken = new RefreshToken({ token: refreshTokenString, user: user._id, expiresAt });
    await refreshToken.save();

    return res.json({ token, refreshToken: refreshTokenString });
  } catch (err) {
    console.error('Login error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Exchange refresh token for a new access token (rotate refresh token)
exports.refresh = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ message: 'Refresh token required' });

  try {
    const stored = await RefreshToken.findOne({ token: refreshToken });
    if (!stored) return res.status(401).json({ message: 'Invalid refresh token' });

    if (stored.expiresAt && stored.expiresAt < new Date()) {
      await RefreshToken.deleteOne({ _id: stored._id });
      return res.status(401).json({ message: 'Refresh token expired' });
    }

    const user = await User.findById(stored.user);
    if (!user) return res.status(401).json({ message: 'Invalid refresh token' });

    // rotate refresh token: delete old and create a new one
    await RefreshToken.deleteOne({ _id: stored._id });
    const newRefreshTokenString = generateRefreshToken();
    const newExpiresAt = new Date(Date.now() + parseDuration(REFRESH_EXPIRES));
    const newRefreshToken = new RefreshToken({ token: newRefreshTokenString, user: user._id, expiresAt: newExpiresAt });
    await newRefreshToken.save();

    const newAccessToken = generateAccessToken(user);
    return res.json({ token: newAccessToken, refreshToken: newRefreshTokenString });
  } catch (err) {
    console.error('Refresh token error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Logout / revoke refresh token
exports.logout = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ message: 'Refresh token required' });

  try {
    await RefreshToken.deleteOne({ token: refreshToken });
    return res.json({ message: 'Logged out' });
  } catch (err) {
    console.error('Logout error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Protected endpoint: return current user info
exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    console.error('Me error', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Helper: parse duration strings like '15m', '7d' into milliseconds
function parseDuration(str) {
  // supports s, m, h, d
  if (!str) return 0;
  const match = String(str).match(/^(\d+)([smhd])$/);
  if (!match) return 0;
  const v = parseInt(match[1], 10);
  const unit = match[2];
  switch (unit) {
    case 's':
      return v * 1000;
    case 'm':
      return v * 60 * 1000;
    case 'h':
      return v * 60 * 60 * 1000;
    case 'd':
      return v * 24 * 60 * 60 * 1000;
    default:
      return 0;
  }
}
