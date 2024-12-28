export interface IUser {
  email: string
  password: string
}

export interface ILibrary {
  title: string
  description: string
  cover: string
}

export interface IContent extends ILibrary {
  duration: number
  audio?: number
}
