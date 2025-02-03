// Import necessary modules and models
import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import Withdraw from "@/lib/model/withdraw";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { withdrawalId } = await params;
      
    const updatedData = await req.json();

    await dbConnect();

    const withdrawal = await Withdraw.findById(withdrawalId);    

    if (!withdrawal) {
      return NextResponse.json({ message: "Withdrawal not found" }, { status: 404 });
    }

    Object.keys(updatedData).forEach(key => {
      if (updatedData[key] !== undefined) {
        withdrawal[key] = updatedData[key]; 
      }
    });

    await withdrawal.save();

    return NextResponse.json(
      { message: "Withdrawal updated successfully", withdrawal },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating withdrawal:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
