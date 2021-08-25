import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PageTextSchema = new Schema({
    page: String,
    content: {
        main: String,
        grid: [{ 
            icon: String,
            title: String,
            description: String,
            buttonText: String,
            modalType: String
         }]
    }
});

const PageText = mongoose.model("PageText", PageTextSchema);
export default PageText;