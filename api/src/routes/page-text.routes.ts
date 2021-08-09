import { Express } from 'express';
import pageTextService from "../services/page-text.service"
import routeHelper from "./routes.helper"


export default (app: Express) => {
    const routes = routeHelper(app, "pageText", pageTextService);
    
    return { ...routes }
}