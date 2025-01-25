import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema(
  {
    type: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      wallet: {
        type: String,
        required: true
      },
      status: {
        type: String,
        default: "Pending",
      },
      user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
  },
  { timestamps: true }
);

const Withdraw = mongoose.models.Withdraw || mongoose.model("Withdraw", withdrawSchema);

export default Withdraw;
