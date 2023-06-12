import UserModel from "./model";
import IUserDoc, { ICreateUser } from "./dto";

export class User {
    static async createUser(data: ICreateUser): Promise<IUserDoc> {
        try {
            const user = await UserModel.create({
                full_name: data.full_name,
                email: data.email,
                password: data.password
            })

            return user
        } catch (error) {
            throw error
        }
    }
}