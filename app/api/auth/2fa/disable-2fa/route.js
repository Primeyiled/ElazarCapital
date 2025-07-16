import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import bcrypt from "bcryptjs";
import { getUserFromToken } from "@/lib/utils/auth";

export async function POST(req) {
  await dbConnect();

  const user = await getUserFromToken(req);
  if (!user) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const dbUser = await User.findById(user._id)

  dbUser.twoFactorAuth = false;
  await dbUser.save();

  return Response.json({ message: "2FA disabled successfully" });
}
