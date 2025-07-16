import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import bcrypt from "bcryptjs";
import { getUserFromToken } from "@/lib/utils/auth"; // Assumes you're using cookies or JWT

export async function POST(req) {
  const { password } = await req.json();
  if (!password) {
    return Response.json({ message: "Password is required" }, { status: 400 });
  }

  await dbConnect();

  const user = await getUserFromToken(req); // You must implement this function securely
  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const dbUser = await User.findById(user._id).select("+password");
  const isMatch = await bcrypt.compare(password, dbUser.password);

  if (!isMatch) {
    return Response.json({ message: "Incorrect password" }, { status: 401 });
  }

  dbUser.twoFactorAuth = true;
  await dbUser.save();

  return Response.json({ message: "2FA enabled successfully" });
}
