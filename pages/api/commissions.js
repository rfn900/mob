import dbConnect, { jsonify } from '../../db/mongodb'
import Commissions from '../../models/commissions'
import { calculateTotalRevenue } from '../../utils/dataFunctions'
import moment from 'moment'
import jwt from 'jsonwebtoken'
import User from '../../models/users'

const validateCookie = async (cookie) => {
  if (!cookie) return false
  const token = cookie.split('=')[1]
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: userId })
    if (!user) return false
  } catch (e) {
    return false
  }
  return true
}

const fetchCommissions = async () => {
  const dbRes = await Commissions.find()
  const programNames = []
  const stats = []
  const data = dbRes.map((commissionObj, index) => {
    const resultsArray = []
    const month = moment(commissionObj.date).format('MMM')
    resultsArray.push(month)
    let sum = 0
    commissionObj.results.forEach((result) => {
      if (index === 0) programNames.push(result.program)
      resultsArray.push(Number(result.value))
      sum += Number(result.value)
    })
    resultsArray.push(sum)
    return resultsArray
  })

  for (let i = 0; i < 4; i++) {
    let thisMonthValue = data[data.length - 1][i + 1]
    let lastMonthValue = data[data.length - 2][i + 1]
    let change = (100 * (thisMonthValue - lastMonthValue)) / lastMonthValue
    let truncateChange = Math.round(change * 100) / 100

    stats.push({
      name: programNames[i],
      stat: thisMonthValue,
      change: truncateChange,
      changeType: change > 0 ? 'increase' : 'decrease',
      lastMonht: lastMonthValue,
      //thisYear: getThisYearsCommission(data, i + 1),
      thisYear: calculateTotalRevenue(data, 'thisYear', i + 1),
    })
  }

  if (!dbRes) {
    return {
      notFound: true,
    }
  }
  return {
    commissions: jsonify(data),
    stats: stats,
  }
}

const handler = async (req, res) => {
  await dbConnect()
  const hasValidCookie = await validateCookie(req.headers.cookie)
  if (!hasValidCookie) {
    res.status(401).json({ msg: 'Not authorized to see this resource' })
    return
  }

  const data = await fetchCommissions()
  if (req.method === 'GET') res.status(200).json(data)
  else
    res.status(400).json({
      msg: 'This endpoint does not support this http method',
    })
}

export default handler
