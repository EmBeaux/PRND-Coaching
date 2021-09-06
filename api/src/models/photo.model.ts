import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    destination: String,
    encoding: String,
    fieldname: String,
    filename: String,
    mimetype: String,
    originalname: String,
    path: String,
    size: Number,
});

const Photo = mongoose.model("Photo", PhotoSchema);
export default Photo;