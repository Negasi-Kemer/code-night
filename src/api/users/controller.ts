import { User } from "./command";
import { RequestHandler } from 'express'
import { ICreateUser } from "./dto";

export const create: RequestHandler = async (req, res, next) => {
    try {
        const { full_name, email, password } = <ICreateUser>req.body;
        const user = await User.create({ full_name, email, password })

        // Response
        res.status(201).json({
            status: "Success",
            message: "User created successfully",
            data: {
                user
            }
        })
    } catch (error) {
        next(error)
    }
}