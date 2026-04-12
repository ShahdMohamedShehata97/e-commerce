import zod from "zod";
import { loginSchema } from "./login.schema";


export type loginObjectType= zod.infer<typeof loginSchema>

