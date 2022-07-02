import { Express, Request, Response, NextFunction } from "express";
import { getBookHandler } from "./controllers/books.controller";
function routes(app: Express) {
  async function throwsError() {
    throw new Error("Boom!");
  }

  app.get("/api/books/:bookId/:authorId", getBookHandler);

  app.get("/error", async (req: Request, res: Response) => {
    try {
      await throwsError();
      res.sendStatus(200);
    } catch (e) {
      res.status(400).send("Something bad happened");
    }
  });
}

export default routes;
