export interface IApiResponse<T> {
  executionTime: string
  count: number
  content: T[]
}

export interface IContent {
  id: number
  title: string
  author?: string
  duration: string
  description: string
  cover: string
  link: string
  is_saved?: boolean
}

export interface IContentLibrary extends IContent {
  progress?: string
  saved_at?: string
}

export interface ILoginResponse {
  token: string
  user: IUser
}

export interface IUser {
  id: number
  name?: string
  lastname?: string
  username?: string
  email: string
  created_at?: string
}

export interface IGenre {
  id: number
  title: string
  description?: string
}
