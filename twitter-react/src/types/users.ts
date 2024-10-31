export interface IUser {
  username: string
  email: string
  password: string
  followers: string[]
  follow: string[]
  tweets: ITweet[]
}

interface ITweet{
  id: string
  content: string
  timestamp: string
}