import { NextResponse } from 'next/server';
import {PrismaClient} from "@prisma/client";
import {compare} from "bcryptjs";
const prisma = new PrismaClient();


export async function GET(request: Request){
    const {searchParams} = new URL(request.url);
    const email = searchParams.get('email');
    if(!email){
        return new Response('Email is required', {status: 400});
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return NextResponse.json(user);
}


export async function POST(request: Request){
    const {email, password} = await request.json();
    if(!email || !password){
        return new Response('Email and password are required', {status: 400});
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(!user){
        return new Response('Invalid credentials', {status: 401});
    } else {
        const valid = await compare(password, user.password);
        if(!valid){
            return new Response('Invalid credentials', {status: 401});
        } else {
            return NextResponse.json(user);
        }
    }
}
