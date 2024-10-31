export interface IUser {
  id: string
  username: string
  email: string
  password: string
  followers: string[]
  follow: string[]
  tweets: ITweet[]
}

export interface ITweet{
  id: string
  content: string
  timestamp: string
}