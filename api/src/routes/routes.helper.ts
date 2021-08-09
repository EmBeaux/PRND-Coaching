import { Express, Request, Response } from 'express';
import { Service } from "../types/route.types";

export default (app: Express, modelName: String, modelService: Service) => {
    return {
        create: app.post(`/${modelName}`, (req: Request, res: Response) => {
            modelService.create(req, res);
        }),
        read: app.get(`/${modelName}`, (req: Request, res: Response) => {
            modelService.read(req, res);
        }),
        update: app.put(`/${modelName}/:id`, (req:Request, res: Response) => {
            modelService.update(req, res);
        }),
        delete: app.delete(`/${modelName}/:id`, (req:Request, res: Response) => {
            modelService.delete(req, res);
        })
    }
}