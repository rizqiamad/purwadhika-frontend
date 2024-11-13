import { Document } from "@contentful/rich-text-types";

export interface IRandomUser {
  gender: string
  name: IName
  location: ILocation
  email: string
  phone: string
  picture: IPicture
}

interface IName{
  title: string
  first: string
  last: string
}

interface ILocation{
  city: string
  state: string
}

interface IPicture{
  large: string
  medium: string
  thumbnail: string
}

export interface IBlogProduct {
  fields: {
    title: string;
    slug: string;
    category: string;
    date: string;
    content: Document;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: {
      fields: {
        name: string;
        email: string;
        avatar: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    };
  };
}
