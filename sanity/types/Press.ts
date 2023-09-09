
export type Press = {
  _id: string,
  title: string,
  pressItems: {
    map(arg0: (singlePress: { press_link: string | import("url").UrlObject; press_hed: string; _key:string}) => import("react").JSX.Element): any;
    _key: string,
    press_hed: string,
    press_link: string
  }
};

