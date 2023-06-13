import { config } from "dotenv";
config({ path: ".env" })

export default {
    env: <string>process.env.NODE_ENV,
    mongoDb: <string>process.env.MONGODB_REMOTE
}