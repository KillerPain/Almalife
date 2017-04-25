<<<<<<< HEAD
import {IComment} from './comment.model'
import {IUser} from './user.model'


export interface IPost {
    comments: IComment[],
    title: string,
    content: string,
    posted_date: Date,
    update_date: Date,
    blog: IUser,
    images: number;
=======
import {IComment} from './comment.model'
import {IUser} from './user.model'


export interface IPost {
    comments: IComment[],
    title: string,
    content: string,
    posted_date: Date,
    update_date: Date,
    blog: IUser,
    category: ICategory,
    keywords: ITag,
    images: number;
>>>>>>> d4a6d986a1dd39c5c591fb857621bde65bcb31ac
}