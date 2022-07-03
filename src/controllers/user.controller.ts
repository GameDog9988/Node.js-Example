import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma/prisma";

export async function createUserHandler(
  req: Request<{}, {}, { firstName: string; lastName: string }>,
  res: Response,
  next: NextFunction
) {
  const result = await prisma.user.create({
    data: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
  });
  res.json(result);
}
