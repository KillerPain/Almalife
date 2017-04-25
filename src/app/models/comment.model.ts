import { IUser } from './user.model'

export interface IComment {        
    content: string,
    author: IUser,
    date: Date,    
}