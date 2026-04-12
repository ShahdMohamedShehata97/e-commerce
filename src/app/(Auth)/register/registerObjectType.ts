import zod from "zod";
import { registerSchema } from "./register.schema";


export type registerObjectType= zod.infer<typeof registerSchema>

