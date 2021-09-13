import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from "./routes/user.routes";
import pageTextRoutes from "./routes/page-text.routes";
import photoRoutes from "./routes/photos.routes";
import passport from "passport";
import cookieSession from "cookie-session";

mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback: Function){
  console.log("Connection Succeeded");
});
require('./services/helpers/passport.helper')(passport)

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.listen(3001, () => {
  console.log('Application started on port 3001!');
});

// List of all api routes
photoRoutes(app);
userRoutes(app);
pageTextRoutes(app);
