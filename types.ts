import { Tag } from "contentful";
import { ICategoryFields } from "./@types/generated/contentful";

export interface ICategoryState extends ICategoryFields {
  id: string;
}

export interface ICategory extends Tag {
  selected: boolean;
}
