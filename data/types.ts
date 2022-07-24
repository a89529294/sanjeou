export const allIcons = {
  1: "/img/icons/product_types/1.svg",
  2: "/img/icons/product_types/2.svg",
  3: "/img/icons/product_types/3.svg",
  4: "/img/icons/product_types/4.svg",
  5: "/img/icons/product_types/5.svg",
  6: "/img/icons/product_types/6.svg",
  7: "/img/icons/product_types/7.svg",
};

export type Product = {
  id: number;
  imgURL: string;
  name: string;
};

export type Partners = {
  [type: string]: string[];
};
export type News = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgURL: string;
  categoryId: number;
};
export type Achievement = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgURL: string;
  productTypeIds: (keyof typeof allIcons)[];
};

export type CompanyInfo = {
  title: string;
  content: string;
  videoURL: string;
  certs: {
    id: number;
    name: string;
    imgURL: string;
  }[];
  milestones: {
    year: number;
    texts: string[];
  }[];
};

export type NewsCategory = {
  id: number;
  title: string;
};
