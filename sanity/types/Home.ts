

export type Home = {
  _id: string,
  title: string,
  images_url: {
    map(arg0: (homeImage: { homeImgUrl: string; }) => import("react").JSX.Element): any;
    homeImgUrl: string, 
    _key: string,

  },
};