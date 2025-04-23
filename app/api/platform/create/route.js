import { NextResponse } from "next/server";
import { supabase } from "../../../_services/supabase";

export async function POST(req) {
  const { data, session } = await req.json();

  const pageData = {
    uid: session.id,
    displayName: data.bio.displayName.replace("@", ""),
    bio: data.bio.bio,
    platformLinks: data.platforms.map((link) => {
      return { name: link.name, link: link.link };
    }),
    featuredContent: [], //TODO: REPLACE LATER
    donationsLink: data.donationsLink || null,
    additionalLinks: data.additionalLinks.filter(
      (link) => link.name && link.link
    ),
    platformsData: data.platforms,
  };

  try {
    const { data: insertedData, error } = await supabase
      .from("pages")
      .insert(pageData)
      .select()
      .single();

    if (error) {
      return NextResponse.json({
        data: null,
        error: { message: error.message },
      });
    }

    return NextResponse.json({ data: insertedData, error: null });
  } catch (error) {
    if (error) {
      return NextResponse.json({
        data: null,
        error: { message: "Something went wrong, please try again." },
      });
    }
  }
}
