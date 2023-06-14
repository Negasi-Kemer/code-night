import UserModel from "./model";
import IUserDoc from "./dto";

export class UserQueries {
  static async getAllUsers(): Promise<IUserDoc[]> {
    try {
      const users = await UserModel.find({});
      return users;
    } catch (error) {
      throw error;
    }
  }
}
