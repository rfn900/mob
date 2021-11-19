import jwt from "jsonwebtoken";
import User from "../models/users";
import mongoose from "mongoose";
export const validateCookie = async (cookie) => {
  if (!cookie) return false;
  const token = cookie.split("=")[1];
  const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) return false;
  } catch (e) {
    return false;
  }
  return true;
};
