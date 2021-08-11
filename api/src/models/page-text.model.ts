import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PageTextSchema = new Schema({
    page: String,
    markdown: String
});

const PageText = mongoose.model("PageText", PageTextSchema);
export default PageText;