import { DetailedHTMLProps, HTMLAttributes } from "react";
// import { StaticImport } from "";

export type CarouselProductProps = {
  title: string;
  description: string;
  preview: string;
};

export type ProductCardProps = {
  image_path__mini: string;
  imageAlt: string;
  price: number;
  discount?: number;
  tagName?: string;
};

export type ProductCardMainProps = {
  product: {
    image_path__main: string;
    imageAlt: string;
    price: number;
    discount?: number;
    tagName?: string;
  };
};

export type CarouselItemProps = {
  slide: CarouselProductProps;
  slideIndex: number;
  slidesLength: number;
  isPagination: boolean;
};

// MOCK PRODUCT DETAIL TODO //

export type ProductTagType = {
  tagName?: string;
  discount?: number;
  price?: number;
};

export type ProductTagsType = {
  tags: ProductTagType[];
};

export type ProductEnergyValueType = { title: string; value: number };

export type ProductType = {
  previewImages: string[];
  title: string;
  price: number;
  discount: number;
  tagName: string;
  description: string;
  energyValue: ProductEnergyValueType;
  storageCondition: string;
  shelfLife: string;
  weight: number;
};

export type RecommendationProductCardType = {
  recommendImg: string;
  title: string;
  price: number;
  tag: string;
};

export type ProductsDetailType = {
  product: ProductType[];
};
