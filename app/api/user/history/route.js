import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import Deposit from "@/lib/model/deposit";
import Withdraw from "@/lib/model/withdraw";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const deposits = await Deposit.find({ user: userId }).sort({
      createdAt: -1,
    });
    const withdrawals = await Withdraw.find({ user: userId }).sort({
      createdAt: -1,
    });

    const history = {
      deposits,
      withdrawals,
    };

    return NextResponse.json({ history }, { status: 200 });
  } catch (error) {
    console.error("History fetch error:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching history" },
      { status: 500 }
    );
  }
}
