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
}