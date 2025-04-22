import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getSession() {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("session");
  const decoded = jwt.decode(token?.value);

  console.log(decoded);
  return decoded;
}
