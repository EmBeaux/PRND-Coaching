import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PageTextSchema = new Schema({
    page: String,
    content: {
        html: String,
        styles: Object
    }
});

const PageText = mongoose.model("PageText", PageTextSchema);
export default PageText;