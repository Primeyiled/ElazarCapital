// /app/api/auth/me/route.js
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import { getUserFromToken } from "@/lib/utils/auth";

export async function GET(req) {
  try {
    await dbConnect();
    const user = await getUserFromToken(req);
    if (!user) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    return Response.json({
      twoFactorEnabled: user.twoFactorAuth || false,
    });
  } catch (err) {
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
