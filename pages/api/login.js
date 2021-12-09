import dbConnect from '../../db/mongodb'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import cookie from 'cookie'
import User from '../../models/users'

const generateToken = (user) =>
  jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

const createAndSendToken = (user, statusCode, req, res) => {
  const token = generateToken(user)
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7, // One week
      sameSite: 'strict',
      path: '/',
    })
  )
  res.statusCode = statusCode
  res.json({
    status: 'success',
    token,
    user,
  })
}
export default async (req, res) => {
  await dbConnect()
  if (req.method === 'POST') {
    const { email, password } = req.body
    if (!email || !password) {
      res.statusCode = 400
      return res.json({
        status: 'error',
        message: 'You need to provide Email and Password',
      })
    }
    const user = await User.findOne({ email: email })
    const passwordConfirms = user
      ? await bcrypt.compare(password, user.password)
      : null

    if (!passwordConfirms) {
      return res.status(401).json({
        status: 'error',
        message: 'Incorrect email or password.',
      })
    }

    createAndSendToken(user, 200, req, res)
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({
      status: 'error',
      message: `The ${req.method} method is not supported for this endpoint`,
    })
  }
}
