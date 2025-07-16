import mongoose from "mongoose";

const depositSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    investment: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    wallet: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    userName: {
      type: String,
    },
    paymentSlip: {
      type: String,
      required: true,
    },
    paymentSlipPublicId: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Deposit =
  mongoose.models.Deposit || mongoose.model("Deposit", depositSchema);

export default Deposit;
