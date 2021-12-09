import { validateCookie } from '../../utils/validateCookie'
import dbConnect from '../../db/mongodb'
export default async (req, res) => {
  await dbConnect()
  if (req.method === 'GET') {
    const isValidCookie = await validateCookie(req.headers.cookie)
    if (isValidCookie) {
      res.status(200).json({ userValidate: true })
      return
    } else {
      res.status(401).json({ userValidate: false })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({
      status: 'error',
      message: `The ${req.method} method is not supported for this endpoint`,
    })
  }
}
