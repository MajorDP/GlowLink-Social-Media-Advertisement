import { getPlatformByUsername } from "../_services/platform";
import { IPageData, ITemplate } from "../_interfaces/page";
import { ComponentType } from "react";
import Error from "../_components/Error";
import dynamic from "next/dynamic";

interface IPage {
  params: {
    username: string;
  };
}

async function page({ params }: IPage) {
  const { username } = await params;

  const { data, error }: { data: IPageData; error: { message: string } } =
    await getPlatformByUsername(username);

  if (error) {
    return <Error message={error.message} />;
  }

  const templateMap: Record<string, ComponentType<ITemplate>> = {
    templateA: dynamic(() => import("../_components/templates/TemplateA")),
    templateB: dynamic(() => import("../_components/templates/TemplateB")),
    templateC: dynamic(() => import("../_components/templates/TemplateC")),
    templateD: dynamic(() => import("../_components/templates/TemplateD")),
    templateE: dynamic(() => import("../_components/templates/TemplateE")),
  };

  const TemplateComponent = templateMap[data.template];

  return <TemplateComponent data={data} isPublic={true} />;
}

export default page;
