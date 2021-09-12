import Photo from "../models/photo.model"
import { Request, Response } from 'express';
import serviceHelper from "./service.helper";

export default {
  ...serviceHelper(Photo, 'photo'),
  create(req: Request | any, res: Response) {
    if (req.files && req.files.length > 0) {
      const savedFiles: typeof Photo[] = []
      req.files.forEach(file => {
        const newRecord = new Photo({ ...file })
        newRecord.save((error: any) => {
          if (error) {
            console.log(error)
          }
        })

        savedFiles.push(newRecord);
      })

      res.send({
        success: true,
        message: `photo saved successfully!`,
        payload: savedFiles
      })
    } else {
      res.status(401).send({
        success: false,
        message: 'No uploads were sent'
      })

      return;
    }
  }
}