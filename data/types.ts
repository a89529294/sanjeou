export const allIcons = {
  1: "/img/icons/product_types/1.svg",
  2: "/img/icons/product_types/2.svg",
  3: "/img/icons/product_types/3.svg",
  4: "/img/icons/product_types/4.svg",
  5: "/img/icons/product_types/5.svg",
  6: "/img/icons/product_types/6.svg",
  7: "/img/icons/product_types/7.svg",
};

export const allWhiteIcons = {
  1: "/img/icons/product_types/1-white.svg",
  2: "/img/icons/product_types/2-white.svg",
  3: "/img/icons/product_types/3-white.svg",
  4: "/img/icons/product_types/4-white.svg",
  5: "/img/icons/product_types/5-white.svg",
  6: "/img/icons/product_types/6-white.svg",
  7: "/img/icons/product_types/7-white.svg",
};

export type Product = {
  id: number;
  imgURLs: string[];
  name: string;
  product_type: number;
  feature: string;
  spec: string;
  catalogs: number[];
};

export type ProductCategory = {
  id: number;
  name: string;
  iconURL: string;
  whiteIconURL: string;
};

export type Partners = {
  [type: string]: string[];
};
export type News = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgURLs: string[];
  categoryId: number;
};
export type Achievement = {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgURLs: string[];
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

export type Catalog = {
  id: number;
  name: string;
  pdfURL: string;
  product_type: number;
};

export type Video = {
  id: number;
  name: string;
  URL: string;
};
