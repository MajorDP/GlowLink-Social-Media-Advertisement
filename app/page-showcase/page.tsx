import { getPlatformById } from "../_services/platform";
import { getSession } from "../_services/session";
import Error from "../_components/Error";
import { IPageData, ITemplate } from "../_interfaces/page";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

async function page() {
  const session = await getSession();
  const { data, error }: { data: IPageData; error: { message: string } } =
    await getPlatformById(session.id);

  if (error) {
    return <Error message={error.message} />;
  }

  const templateMap: Record<string, ComponentType<ITemplate>> = {
    templateA: dynamic(() => import("../_components/templates/TemplateA")),
    templateB: dynamic(() => import("../_components/templates/TemplateB")),
  };
  console.log(data);
  const TemplateComponent = templateMap[data.template];

  return <TemplateComponent data={data} isPublic={false} />;
}

export default page;
