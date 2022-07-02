import { Request, Response, NextFunction } from "express";

export function getBookHandler(
  req: Request<{ bookId: string; authorId: string }>,
  res: Response,
  next: NextFunction
) {
  console.log(res.locals.name);
  res.send(res.locals.name);
}
