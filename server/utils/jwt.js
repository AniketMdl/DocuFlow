const jwt = require('jsonwebtoken')

function signAccessToken(payload){
  const secret = process.env.JWT_ACCESS_SECRET || 'access-secret'
  return jwt.sign(payload, secret, { expiresIn: '15m' })
}
function signRefreshToken(payload){
  const secret = process.env.JWT_REFRESH_SECRET || 'refresh-secret'
  return jwt.sign(payload, secret, { expiresIn: '7d' })
}
function verifyRefreshToken(token){
  const secret = process.env.JWT_REFRESH_SECRET || 'refresh-secret'
  return jwt.verify(token, secret)
}
module.exports = { signAccessToken, signRefreshToken, verifyRefreshToken }
