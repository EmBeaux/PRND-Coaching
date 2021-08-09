import { Request, Response } from 'express';
import { Model } from  'mongoose';

export default (model: Model<any>, record: String) => {
    return {
        create(req: Request, res: Response) {
            const newRecord = new model({ ...req.body })
    
            newRecord.save((error: any) => {
              if (error) {
                console.log(error)
              }
              res.send({
                success: true,
                message: `${record} saved successfully!`
              })
            })
        },
        update(req: Request, res: Response) {
            model.updateOne({ _id: req.params.id }, req.body).then((response: any) => {
                if (response.n === 0) {
                    res.send({ success: false, message: `${record} does not exist`})
                }
            
                res.send({ success: true, message: `${record} updated successfully!`})
            })
        },
        read(_req: Request, res: Response) {
            model.find({}).then((data: any)=> {
                const payload = {};
                payload[record + "s"] = data;
                res.send(payload);
              })
        },
        delete(req: Request, res: Response) {
            model.findById(req.params.id).then((modelRecord: any) => {
                modelRecord.remove(); 
                res.send({ success: true, deletedRecord: modelRecord._id })
              })
        }
    }
}