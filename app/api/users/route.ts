import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "username filter required" },
      { status: 400 }
    );
  }

  const statement =
    "select id, username, avatar from users where username ilike $1";
  const values = [username];
  const res = await sql(statement, values);

  return NextResponse.json({ data: res.rows });
}
