import { ObjectId } from 'mongodb'

export interface PageText {
    _id: ObjectId
    page: string
    content: {
        html: string,
        styles: Object
    }
}