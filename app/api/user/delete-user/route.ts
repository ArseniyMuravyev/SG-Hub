import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/utils/database";
import User from "@/models/user";

export async function DELETE(req: NextRequest) {
  try {
    await connectToDb();

    const { id } = await req.json();

    await User.findByIdAndDelete(id);

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
