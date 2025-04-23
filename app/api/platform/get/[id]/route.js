import { NextResponse } from "next/server";
import { supabase } from "../../../../_services/supabase";
export async function GET(req, { params }) {
  const { id } = await params;

  try {
    let { data: page, error } = await supabase
      .from("pages")
      .select("*")
      .eq("uid", id)
      .single();

    if (error) {
      return NextResponse.json({
        data: null,
        error: { message: error.message },
      });
    }

    return NextResponse.json({
      data: page,
      error: null,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      data: null,
      error: { message: "Something went wrong, please try again later." },
    });
  }
}
