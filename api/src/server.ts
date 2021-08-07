import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from "./routes/user.routes";

mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback: Function){
  console.log("Connection Succeeded");
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(3001, () => {
  console.log('Application started on port 3001!');
});

// List of all api routes
userRoutes(app);
