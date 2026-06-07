const express = require('express')
const router = express.Router()
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../utils/jwt')

// simple demo user
const DEMO_USER = { id: 'user_demo', email: 'demo@docuflow.local', name: 'Demo User' }

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  // TODO: validate against DB and hashed password
  if (email === 'demo@docuflow.local' && password === 'password') {
    const accessToken = signAccessToken({ sub: DEMO_USER.id })
    const refreshToken = signRefreshToken({ sub: DEMO_USER.id })
    // In production set httpOnly cookie for refresh token
    res.json({ accessToken, refreshToken, user: DEMO_USER })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

router.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body
  try {
    const payload = verifyRefreshToken(refreshToken)
    const accessToken = signAccessToken({ sub: payload.sub })
    res.json({ accessToken })
  } catch (err) {
    res.status(401).json({ message: 'Invalid refresh token' })
  }
})

router.get('/me', (req, res) => {
  // TODO: parse Authorization header and verify
  res.json({ user: DEMO_USER })
})

module.exports = router
