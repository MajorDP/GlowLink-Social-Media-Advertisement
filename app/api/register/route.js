import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { supabase } from "../../_services/supabase";

export async function POST(req) {
  const formData = await req.json();

  let { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        username: formData.username,
        role: "user",
      },
    },
  });

  if (error) {
    return NextResponse.json({ data: null, error: error.message });
  }

  const token = jwt.sign(
    {
      id: data.user.id,
      role: data.user.user_metadata.role,
      username: data.user.user_metadata.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return NextResponse.json({ data: token, error: null });
}
