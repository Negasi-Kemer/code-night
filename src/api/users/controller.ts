import { User } from "./command";
import { RequestHandler } from "express";
import { ICreateUser } from "./dto";
import hashPassword from "../../utils/hashPassword";
import { UserQueries } from "./query";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data = <ICreateUser>req.value;
    data.password = hashPassword(data.password);
    const user = await User.createUser(data);

    // Response
    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserQueries.getAllUsers();

    res.status(200).json({
      statu: "Success",
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};
