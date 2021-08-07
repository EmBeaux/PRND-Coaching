import express from 'express';
import bodyParser from 'body-parser';
import { ObjectId } from 'mongodb'
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Post from "./models/post.model";

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

app.post('/posts', (req: Request, res: Response) => {
  console.log(req.params)
  const title = req.body.title;
  const description = req.body.description;
  const new_post = new Post({
    title: title,
    description: description
  })

  new_post.save((error: any) => {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

interface Post {
  _id: ObjectId
  title: string
  description: string
}

app.get('/posts', (req: Request, res: Response) => {
  Post.find({}).then((data)=> {
    res.send({
      posts: data
    })
  })
})

app.put('/posts/:id', (req:Request, res: Response) => {
  Post.findById(req.params.id).then((post: any) => {
    if (!post) {
      console.log("Error While updating")
      res.send({ success: false, message: "Cannot find record" })
    }
    post.title = req.body.title;
    post.description = req.body.description;
    post.save(error => {
      if (error) console.log(error);
      res.send({success: true})
    })
  })
})

app.delete('/posts/:id', (req:Request, res: Response) => {
  Post.findById(req.params.id).then((post: any) => {
    post.remove(); 
    res.send({ success: true, deletedRecord: post._id })
  })
})