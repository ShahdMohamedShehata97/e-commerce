import zod from "zod";
import { addressSchema } from "./address.schema";


export type addressObjectType= zod.infer<typeof addressSchema>