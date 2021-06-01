import connectDB from "../../middleware/mongodb";
import Commissions from "../../models/commissions";

const handler = async (req, res) => {
  const rawCommissions = await Commissions.find();
  res.status(200).json(rawCommissions);
};

export default connectDB(handler);
