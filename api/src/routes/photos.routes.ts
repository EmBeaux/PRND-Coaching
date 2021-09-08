import { Express } from 'express';
import photoService from "../services/photo.service"
import routeHelper from "./routes.helper"
import multer from "multer"

const upload = multer();

export default (app: Express) => {
    const overrideRoutes = {
        create: app.post("/photo", upload.any(), function(req, res, next) {
            photoService.create(req, res)
        })
    }
    const routes = routeHelper(app, "photo", photoService);

    return {
        ...routes,
        ...overrideRoutes,
    }
}