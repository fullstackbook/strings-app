import { getClient } from "@/db";
import bcrypt from "bcrypt";

async function loadAdminUser(username: string, password: string) {
  console.log(`executing loading admin user ${username} pw ${password}`);
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  const client = await getClient();
  await client.connect();
  await client.query(
    "insert into public.users (username, password, is_admin) values ($1, $2, $3)",
    [username, hash, true]
  );
  await client.end();
}

const username = process.argv[2];
const password = process.argv[3];
loadAdminUser(username, password);
