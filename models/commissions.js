import mongoose from "mongoose";
var Schema = mongoose.Schema;

var monthly_results = new Schema({
  results: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

var Commissions =
  mongoose.models["affiliate_report"] ||
  mongoose.model("monthly_results", monthly_results, "monthly_results");

export default Commissions;
