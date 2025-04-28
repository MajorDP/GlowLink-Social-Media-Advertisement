import { NextResponse } from "next/server";
import { supabase } from "../../../_services/supabase";

export async function POST(req) {
  const { data, session } = await req.json();

  console.log(data);
  const pageData = {
    uid: session.id,
    displayName: data.bio.displayName.replace("@", ""),
    bio: data.bio.bio,
    platformLinks: data.platforms.map((link) => {
      return { name: link.name, link: link.link };
    }),
    featuredContent: [], //TODO: REPLACE LATER
    contactEmail: data.contactEmail,
    donationsLink: data.donationsLink,
    additionalLinks: data.additionalLinks.filter(
      (link) => link.name && link.link
    ),
    platformsData: data.platforms,
    template: data.template,
  };

  if (!pageData.uid) {
    return NextResponse.json({
      data: null,
      error: {
        message: "Something went wrong with your session, please try again.",
      },
    });
  }

  if (!pageData.displayName) {
    return NextResponse.json({
      data: null,
      error: { message: "Please provide a display name." },
    });
  }

  const linkRegExp = /^https:\/\/[^\s/$.?#].[^\s]*$/;

  if (
    !pageData.platformLinks.every(
      (link) => link.name.trim() !== "" && linkRegExp.test(link.link)
    )
  ) {
  }

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pageData.contactEmail.trim() !== "") {
    if (!emailRegExp.test(pageData.contactEmail)) {
      return NextResponse.json({
        data: null,
        error: { message: "Please provide a valid contact email." },
      });
    }
  }

  if (pageData.donationsLink.trim() !== "") {
    if (!linkRegExp.test(pageData.donationsLink)) {
      return NextResponse.json({
        data: null,
        error: { message: "Please provide a valid donations link." },
      });
    }
  }

  if (
    !pageData.additionalLinks.every(
      (link) => link.name.trim() !== "" && linkRegExp.test(link.link)
    )
  ) {
    return NextResponse.json({
      data: null,
      error: { message: "Please provide valid additional links and headings." },
    });
  }

  if (pageData.template.trim() === "") {
    return NextResponse.json({
      data: null,
      error: { message: "Please choose a template." },
    });
  }

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
