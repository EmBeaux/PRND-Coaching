import { Express } from 'express';
import userServices from "../services/user.service"
import routeHelper from "./routes.helper"
import { Request, Response } from 'express';

export default (app: Express) => {
    const routes = routeHelper(app, "users", userServices);
    
    return {
        ...routes,
        login: app.post(`/users/login`, (req: Request, res: Response, next) => { userServices.login(req, res, next) }),
        signup: app.post('/users/signup', (req: Request, res: Response) => { userServices.signup(req, res) }),
        logout: app.post('/users/logout', (req: Request, res: Response) => { userServices.logout(req, res) })
    }
}