import PageText from "../models/page-text.model"
import { Request, Response } from 'express';
import photoService from "../services/photo.service"
import serviceHelper from "./service.helper";

export default {
  ...serviceHelper(PageText, 'pageText'),
  read(req: Request, res: Response) {
    PageText.find(req.query).then(async (data: any)=> {
      const payload = {};
      let dataJSON;
      if (data && data[0]) {
        dataJSON = data[0].toJSON()
        for(let i = 0; i < dataJSON.content.grid.length; i++) {
          if (dataJSON.content.grid[i].image && !dataJSON.content.grid[i].image.includes(".")) {
            req.query = { _id: dataJSON.content.grid[i].image }
            await photoService.read(req, res, true).then(photo => {
              dataJSON.content.grid[i].image = `data:image/png;base64,${Buffer.from(photo[0].toJSON().buffer.data).toString('base64')}`
              dataJSON.content.grid[i].imageId = photo[0].toJSON()._id.toString();
            })
          }
        }
      }

      payload['pageTexts'] = [dataJSON || data[0]];
      res.send(payload);
    })
  },
}