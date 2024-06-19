const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// * Perform a case-insensitive search for `searchStr` in `str`
const searchString = (str, searchStr) => {
  return str.toLowerCase().includes(searchStr.toLowerCase())
}

// * Hashing a string
const getHash = async (str) => {
  const salt_rounds = process.env.SALT_ROUNDS
    ? parseInt(process.env.SALT_ROUNDS)
    : 10
  const salt = bcryptjs.genSaltSync(salt_rounds)
  const hashStr = bcryptjs.hashSync(str, salt)
  return hashStr
}

// * Signing a value and return the JWT, with hardcoded expiration time set to 1h (for simplicity)
const getJWT = (id) => {
  const secret = process.env.SECRET_KEY
  if (!secret) {
    throw new Error('SECRET_KEY is not defined in environment variables')
  }
  const token = jwt.sign({ id: id }, secret, { expiresIn: '1h' })
  return token
}

module.exports = { searchString, getHash, getJWT }
