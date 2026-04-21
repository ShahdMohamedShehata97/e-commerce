import { ChanfePasswordSchema, profileSchema } from "./profileSchema";
import * as zod from 'zod'


export type ProfileType = zod.infer<typeof profileSchema>

export type ChangePasswordType = zod.infer<typeof ChanfePasswordSchema>