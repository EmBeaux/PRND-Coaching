import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/posts', (req: Request, res: Response) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
});

app.listen(3001, () => {
  console.log('Application started on port 3001!');
});