import { Express, Request, Response, NextFunction } from "express";
function routes(app: Express) {
  async function throwsError() {
    throw new Error("Boom!");
  }

  app.get(
    "/api/books/:bookId/:authorId",
    (
      req: Request<{ bookId: string; authorId: string }>,
      res: Response,
      next: NextFunction
    ) => {
      console.log(res.locals.name);
      res.send(res.locals.name);
    }
  );

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
