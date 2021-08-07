import { ObjectId } from 'mongodb'

interface User {
    _id: ObjectId
    phoneNumber: string
    fullName: string
    email: string
}