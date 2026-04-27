export interface ProductType{
  id:string,
  title:string,
  images:string[],
  imageCover:string,
  description:string,
  quantity:number,
  price:number,
  ratingsAverage:number,
  ratingsQuantity:number,
  category:CategoryType,
  brand:BrandType ,
  priceAfterDiscount:number

}

export interface CategoryType{
  _id:string,
  name:string,
  slug:string,
  image:string

}

export interface BrandType{
  _id:string,
  name:string,
  slug:string,
  image:string
}


export interface CartResponse{
  _id:string,
  cartOwner:string,
  products:ItemType[],
  totalCartPrice:number 

}
 

export interface ItemType{
  count:number,
  _id:string,
  price:number,
  product:ProductType
}


export interface OrderType{
  shippingPrice:string,
  taxPrice:number,
  shippingAddress:AddressType,
  totalOrderPrice:number,
  paymentMethodType:string,
  isPaid:boolean,
  isDelivered:boolean,
   cartItems:ItemType[],
   createdAt:string
   id:number
}


export interface AddressType{
  details:string,
  phone:string,
  postalCode:string,
  city:string

}

export interface AddressType{
      _id:string,
      name: string,
      details: string,
      phone: string,
      city:string
    
}