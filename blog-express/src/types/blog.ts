import { Document } from "@contentful/rich-text-types";

export interface IUser {
  username: string
  email: string
  avatar: string
}

export interface IBlog {
  id: string
  title: string
  category: string
  thubmnail: string
  slug: string
  createdAt: string
  content: Document
  user: IUser
}