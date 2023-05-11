import { NextResponse } from 'next/server';
import {PrismaClient} from "@prisma/client";
import {compare} from "bcryptjs";

const prisma = new PrismaClient();


export async function GET(request: Request){
    const {searchParams} = new URL(request.url);
    const address = searchParams.get('email');
    if(!address){
        return NextResponse.json({
            error: 'Email is required.',
            status: 400
        })
    }
    const user = await prisma.user.findUnique({
        where: {
            email: address
        }
    })
    if(!user){
        return NextResponse.json({
            error: 'User not found.',
            status: 404
        })
    }
    return NextResponse.json(user)
}


export async function POST(request: Request){
    const {email, password} = await request.json();
    if(!email || !password){
        return NextResponse.json('Email and password are required', {status: 400});
    }
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(!user){
        return NextResponse.json('User not find', {status: 404});
    } else {
        const valid = await compare(password, user.password);
        if(!valid){
            return NextResponse.json('Invalid credentials', {status: 404});
        } else {
            return NextResponse.json(user);
        }
    }
}
