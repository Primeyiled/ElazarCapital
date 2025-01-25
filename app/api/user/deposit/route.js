import { NextResponse } from "next/server";
import { authenticate } from "@/lib/middleware/auth"; // Adjust the import path as needed
import dbConnect from "@/lib/dbConnect"; // Import your database connection utility
import Deposit from "@/lib/model/deposit";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const authResult = await authenticate(request);
    if (!authResult.isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    await dbConnect();

    const formData = await request.formData();

    const type = formData.get("type");
    const investment = formData.get("investment");
    const plan = formData.get("plan");
    const amount = formData.get("amount");
    const wallet = formData.get("wallet");
    const paymentSlip = formData.get("paymentSlip");


    if (!type || !investment || !plan || !amount || !wallet) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    let filePath = null;
    if (paymentSlip) {
      const uploadDir = path.join(process.cwd(), "uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      filePath = path.join(uploadDir, paymentSlip.name);
      const fileBuffer = await paymentSlip.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(fileBuffer));
    }

    const deposit = new Deposit({
      type,
      investment,
      plan,
      amount,
      wallet,
      paymentSlip: filePath,
      user: authResult.userId,
    });

    await deposit.save();

    return NextResponse.json(
      {
        success: true,
        message: "Deposit created successfully.",
        data: deposit,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating deposit:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
