import { compare } from "bcrypt";
import { appError } from "../errors/appError";
import { UserDataCreate } from "../repositories/userRepository";
import { LoginDataTypes } from "../validations/loginSchema";

type Repository = {
  getUserByEmail(email: string): Promise<UserDataCreate | undefined>;
};

export const authServices = {
  async login(data: LoginDataTypes, repository: Repository) {
    try {
      const { email, password } = data;

      const user = await repository.getUserByEmail(email);
      if (!user) throw appError("Email or password invalid!", 400);

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) throw appError("Email or password invalid!!", 400);

      return user;
    } catch (error) {
      throw error;
    }
  },
};
