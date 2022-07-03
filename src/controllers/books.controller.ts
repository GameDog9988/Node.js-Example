import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma/prisma";
import pg from "../../knex/pg";

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

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export async function getKnexUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = await pg<User>("User");

  res.json(result);
}
