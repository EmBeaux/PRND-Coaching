import { Express } from 'express';
import userServices from "../services/user.service"
import routeHelper from "./routes.helper"


export default (app: Express) => {
    const routes = routeHelper(app, "users", userServices);
    
    return { ...routes }
}