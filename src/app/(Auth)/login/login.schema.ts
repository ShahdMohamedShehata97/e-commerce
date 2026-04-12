import * as zod from 'zod'

export const loginSchema=zod.object({

    email:zod.email("Email isn't in format").nonempty('Email is required'),
     password:zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'),
  

})
