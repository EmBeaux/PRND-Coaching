import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PageTextSchema = new Schema({
    page: String,
    content: {
        main: String,
        grid: [{ 
            icon: {
                type: String,
                required: false,
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: false,
            },
            buttonText: {
                type: String,
                required: false,
            },
            modalType: {
                type: String,
                required: false,
            },
            image: {
                type: String,
                required: false,
            },
         }]
    },
    editableElements: [{
        type: String
    }]
});

const PageText = mongoose.model("PageText", PageTextSchema);
export default PageText;