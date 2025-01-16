import { StaticImageData } from "next/image";

export  type Product = {
  codebase: string | undefined;
  title: string;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
