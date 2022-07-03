import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma/prisma";

export async function getBookHandler(
  req: Request<{ bookId: string; authorId: string }>,
  res: Response,
  next: NextFunction
) {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(res.locals.name);
  res.json(result);
}
