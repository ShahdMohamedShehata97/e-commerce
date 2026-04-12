import * as zod from 'zod'

export const registerSchema=zod.object({

    name:zod.string().nonempty('Name is required').min(3,('Name must be at least 3 characters')).max(13,'Name must be maximume 13 characters ') ,
     email:zod.email("Email isn't in format").nonempty('Email is required'),
     password:zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'),
     rePassword:zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'),
     phone:zod.string().regex(/^01[0125][0-9]{8}$/)

}).refine(function(value){
    return value.password === value.rePassword
},({path:['rePassword'],error:' Passwords are inmatch'}))
