import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(express.json()); // In order to actually get the body from a request

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;

    next();
  };

app.use(middleware({ name: "Alexander" }));

routes(app);

app.listen(3000, () => {
  console.log("Application listening at http://localhost:3000");
});
