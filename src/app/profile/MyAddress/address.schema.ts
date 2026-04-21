import zod from "zod";


export const addressSchema=zod.object({
 name:zod.string().nonempty('Name is required').min(3,('Name must be at least 3 characters')).max(13,'Name must be maximume 13 characters ') ,
  
  details:zod.string().nonempty('Name is required').min(13,('Name must be at least 3 characters')).max(25,'Name must be maximume 13 characters '),
  phone:zod.string().regex(/^01[0125][0-9]{8}$/),
  city:zod.string().nonempty('Name is required').min(3,('Name must be at least 3 characters')).max(13,'Name must be maximume 13 characters ') ,
 
})