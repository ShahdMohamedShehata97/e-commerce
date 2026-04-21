import * as zod from 'zod'
export const profileSchema = zod.object({
  name: zod.string().min(3, "Name is required"),
  email: zod.string().email("Invalid email"),
  phone: zod.string().min(11, "Invalid phone")
})



export const ChanfePasswordSchema = zod.object({
  currentPassword: zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'),
    
  password: zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'),
    
  rePassword: zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'),
    
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords do not match",
  path: ["rePassword"]
})