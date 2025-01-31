// Import necessary modules and models
import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import Deposit from "@/lib/model/deposit";
import Withdraw from "@/lib/model/withdraw";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { isAuthenticated, userId } = await authenticate(req);
    const { id } = await params;

    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    let transaction;

    transaction = await Deposit.findById(id);
    if (!transaction) {
      transaction = await Withdraw.findById(id);
    }

    if (!transaction) {
      return NextResponse.json({ message: "Transaction not found" }, { status: 404 });
    }

    if (transaction.user.toString() !== userId) {
      return NextResponse.json({ message: "Unauthorized to delete this transaction" }, { status: 403 });
    }

    if (transaction instanceof Deposit) {
      await Deposit.findByIdAndDelete(id);
    } else if (transaction instanceof Withdraw) {
      await Withdraw.findByIdAndDelete(id);
    }

    return NextResponse.json({ message: "Transaction deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting transaction:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
