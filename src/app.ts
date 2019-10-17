import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the Roottttttttttttttt');
});

app.listen(5000, () => {
  console.log(add(5, 5));
  console.log('Server Running');
});
