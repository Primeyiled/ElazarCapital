import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import Deposit from "@/lib/model/deposit";
import Withdraw from "@/lib/model/withdraw";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function DELETE(req, context) {
  try {
    const { id } = await context.params;

    const { isAuthenticated, userId } = await authenticate(req);
    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    let transaction = await Deposit.findById(id);
    let isDeposit = true;

    if (!transaction) {
      transaction = await Withdraw.findById(id);
      isDeposit = false;
    }

    if (!transaction) {
      return NextResponse.json({ message: "Transaction not found" }, { status: 404 });
    }

    if (transaction.user.toString() !== userId) {
      return NextResponse.json({ message: "Unauthorized to delete this transaction" }, { status: 403 });
    }

    // ✅ Delete image from Cloudinary using public_id
    if (isDeposit && transaction.paymentSlipPublicId) {
      try {
        const result = await cloudinary.uploader.destroy(transaction.paymentSlipPublicId, {
          invalidate: true,
        });

        console.log("Cloudinary deletion result:", result);

        if (result.result !== "ok" && result.result !== "not found") {
          console.warn("Failed to delete image from Cloudinary:", result);
        }
      } catch (cloudErr) {
        console.error("Cloudinary image deletion error:", cloudErr);
      }
    }

    // ✅ Delete the transaction from the database
    if (isDeposit) {
      await Deposit.findByIdAndDelete(id);
    } else {
      await Withdraw.findByIdAndDelete(id);
    }

    return NextResponse.json({ message: "Transaction deleted successfully" }, { status: 200 });

  } catch (err) {
    console.error("Error deleting transaction:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
