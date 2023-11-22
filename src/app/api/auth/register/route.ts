import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from 'bcrypt'

export async function POST (request : any) {
    try {
        const data = await request.json()

    const UserFound = await prisma.user.findUnique({
        where:{
            username: data.username
        }
    })

    if(UserFound){
        return NextResponse.json({
            message: "El usuario ya existe"
        },{status: 400})
    }

    const EmailFound = await prisma.user.findUnique({
        where:{
            email: data.email
        }
    })

    if(EmailFound){
        return NextResponse.json({
            message: "El email ya existe"
        },{status: 400})
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await prisma.user.create({data: {
        username: data.username,
        email: data.email,
        password: hashedPassword
    }})
    const {password: _, ...user} = newUser

    return NextResponse.json(user)
    
    } catch (error : any) {
        
        return NextResponse.json({
            message: error.message
        },{status: 500})
    }
}