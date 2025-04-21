//featuredContent in IPageInputData is to be changed once metadata queries form Instagram/TikTok are implemented

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
  donationLink: string;
}
