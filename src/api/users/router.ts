import { Router } from "express";
const router = Router();
import { createUserValidation } from "./validation";
import { createUser } from "./controller";
import validator from "../../utils/validator";

router.route("/").post(validator(createUserValidation), createUser);

export default router;
