//interfaces in this file are to be changed once metadata queries form Instagram/TikTok are implemented

export interface IPageInputData {
  platforms:
    | Array<{
        name: string;
        link: string;
      }>
    | [];
  bio: {
    displayName: string;
    bio: string;
  };
  featuredContent:
    | Array<{
        platformName: string;
        content: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        };
      }>
    | [];
  additionalLinks:
    | Array<{
        name: string;
        link: string;
      }>
    | [];
  contactEmail: string;
  donationsLink: string;
  template: string;
}

export interface IPageData {
  id: number;
  created_at: string;
  platformsData:
    | Array<{
        name: string;
        link: string;
      }>
    | [];
  platformLinks:
    | Array<{
        name: string;
        link: string;
      }>
    | [];
  displayName: string;
  bio: string;
  featuredContent:
    | Array<{
        platformName: string;
        content: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        };
      }>
    | [];
  additionalLinks:
    | Array<{
        name: string;
        link: string;
      }>
    | [];
  contactEmail: string;
  donationsLink: string;
  template: string;
}

export interface ITemplate {
  data: IPageData;
  isPublic: boolean;
}
