import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from "./routes/user.routes";
import pageTextRoutes from "./routes/page-text.routes";
import photoRoutes from "./routes/photos.routes";
import passport from "passport";
import cookieSession from "cookie-session";
import passportHelper from "./services/helpers/passport.helper"

mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017');
console.log("whoop")
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback: Function){
  console.log("Connection Succeeded");
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
passportHelper(passport)
app.set('trust proxy', true) // trust first proxy
app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(passport.initialize());
app.use(passport.session());
// List of all api routes
photoRoutes(app);
userRoutes(app);
pageTextRoutes(app);

app.listen(3001, () => {
  console.log('Application started on port 3001!');
});

