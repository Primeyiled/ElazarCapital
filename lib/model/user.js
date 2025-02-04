import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    investment: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    totalInvest: {
      type: Number,
      default: 0,
    },
    totalProfit: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    refBonus: {
      type: Number,
      default: 0,
    },
    role: {
      type: Number,
      default: 0,
    },
    referralCode: {
      type: String,
    },
    referredBy: {
      type: String,
    },
    referralCount: {
      type: Number,
      default: 0,
    },
    otp: { type: String },
    otpExpires: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
