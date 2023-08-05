import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // get currently logged in user
  const jwtPayload = await getJWTPayload();

  // fetch user data
  const res = await sql(
    "select id, username, avatar from users where id = $1",
    [jwtPayload.sub]
  );
  const user = res.rows[0];
  // return user data
  return NextResponse.json({ data: user });
}
