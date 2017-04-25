import {IComment} from './comment.model'
import {IUser} from './user.model'
import {IBlog} from './blog.model'
import {ICategory} from './category.model'
import {IKeyword} from './keyword.model'


export interface IPost {
    comments: IComment[],
    title: string,
    content: string,
    posted_date: Date,
    update_date: Date,
    blog: IBlog,
    category: ICategory,
    keywords: IKeyword[],
    images: number;
}

