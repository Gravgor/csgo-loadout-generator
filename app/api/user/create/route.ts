import { NextResponse } from 'next/server';
import {PrismaClient} from "@prisma/client";
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();



export async function POST(request: Request){
    const {email, username, password} = await request.json();
    if(!email || !username || !password){
        return NextResponse.json('Email, username and password are required', {status: 400});
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(user){
        return NextResponse.json({
            error: 'User already exists',
            status: 400
        });
    } else {
        const newPassword = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: newPassword
            }
        })
        return NextResponse.json(newUser);
    }
}