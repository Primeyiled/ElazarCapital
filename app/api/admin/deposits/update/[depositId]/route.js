// Import necessary modules and models
import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import Deposit from "@/lib/model/deposit";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { depositId } = await params;
      
    const updatedData = await req.json();

    await dbConnect();

    const deposit = await Deposit.findById(depositId);    

    if (!deposit) {
      return NextResponse.json({ message: "Deposit not found" }, { status: 404 });
    }

    Object.keys(updatedData).forEach(key => {
      if (updatedData[key] !== undefined) {
        deposit[key] = updatedData[key]; 
      }
    });

    await deposit.save();

    return NextResponse.json(
      { message: "Deposit updated successfully", deposit },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating deposit:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
