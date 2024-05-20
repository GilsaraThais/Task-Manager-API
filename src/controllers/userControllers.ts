import { Request, NextFunction, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import { userSchema } from "../validations/userSchema";
import { userServices } from "../services/userServices";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = userSchema.parse(req.body);

      const userCreated = await userServices.create(
        { name, email, password },
        userRepository
      );

      return res.status(201).json({ message: "User created!", userCreated });
    } catch (error) {
      return next(error);
    }
  },
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },
};
