import { StaticImageData } from "next/image";

export interface IBlogDT {
  id: number;
  img?: StaticImageData;
  images?: StaticImageData[];
  title: string;
  date: string;
  category: string;
  author: string;
  videoId?: string;
  avatar?: StaticImageData;
  blogQuote?: boolean;
  video?: boolean;
  imgSlider?: boolean;
  blogQuoteTwo?: boolean;
  blogHeroSlider?: boolean;
  desc?: string;
  slug?: string;
  detail_desc?: string | string[];
  detail_images?: StaticImageData[];
}