import userServices from "../services/user.service"
import { Request, Response } from 'express';
import { Express } from 'express'

export default (app: Express) => {
    app.post('/users', (req: Request, res: Response) => {
        userServices.create(req, res);
    })
    
    app.get('/users', (req: Request, res: Response) => {
        userServices.read(req, res);
    })
    
    app.put('/users/:id', (req:Request, res: Response) => {
        userServices.update(req, res);
    })
    
    app.delete('/users/:id', (req:Request, res: Response) => {
        userServices.delete(req, res);
    })
}