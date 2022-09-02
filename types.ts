import { ICategoryFields } from "./@types/generated/contentful";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface ICategoryState extends ICategoryFields{
  id: string;
}
