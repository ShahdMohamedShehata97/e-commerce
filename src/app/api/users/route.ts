import { NextResponse } from "next/server";

export function GET(){

    const user=[
        {
            name:'ahmed',
            age:12
        },

          {
            name:'ali',
            age:22
        },

        
          {
            name:'nour',
            age:20
        }
    ]


    return NextResponse.json({message:'success',data:user})

}