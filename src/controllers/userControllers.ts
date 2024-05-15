import { Request, NextFunction, Response } from "express";

export const userControllers = {
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!", user });
    } catch (error) {
      return next(error);
    }
  },
};
