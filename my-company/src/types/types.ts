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