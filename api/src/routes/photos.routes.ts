import { Express } from 'express';
import photoService from "../services/photo.service"
import routeHelper from "./routes.helper"
import bodyParser from 'body-parser';
import multer from "multer"

const upload = multer({ dest: "uploads/" });

export default (app: Express) => {
    const routes = routeHelper(app, "photo", photoService);
    app.use(bodyParser.json({limit: '10mb'}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
    
    return { create: app.post("/photo", upload.array("files"), photoService.create), ...routes };
}