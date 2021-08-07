import User from "../models/user.model"
import { Request, Response } from 'express';

export default {
    create(req: Request, res: Response) {
        const newUser = new User({ ...req.body })

        newUser.save((error: any) => {
          if (error) {
            console.log(error)
          }
          res.send({
            success: true,
            message: 'User saved successfully!'
          })
        })
    },
    update(req: Request, res: Response) {
        User.updateOne({ _id: req.params.id }, req.body).then((response: any) => {
            if (response.n === 0) {
                res.send({ success: false, message: "User does not exist"})
            }
        
            res.send({ success: true, message: "User updated successfully!"})
        })
    },
    read(_req: Request, res: Response) {
        User.find({}).then((data)=> {
            res.send({
              users: data
            })
          })
    },
    delete(req: Request, res: Response) {
        User.findById(req.params.id).then((user: any) => {
            user.remove(); 
            res.send({ success: true, deletedRecord: user._id })
          })
    }
}