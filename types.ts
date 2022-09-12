import { Tag } from "contentful";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { ICategoryFields } from "./@types/generated/contentful";

export interface ICategoryState extends ICategoryFields {
  id: string;
}

export interface ICategory extends Tag {
  selected: boolean;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};