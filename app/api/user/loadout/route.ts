import { NextRequest, NextResponse } from 'next/server';
import {PrismaClient} from "@prisma/client";
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request: Request){
    const {searchParams} = new URL(request.url)
    const address = searchParams.get('email')
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
    const loadouts = await prisma.loadout.findMany({
        where: {
            userId: user.id
        },
        include: {
            items: true
        }
    })
    if(!loadouts){
        return NextResponse.json({
            error: 'No loadouts found.',
            status: 404
        })
    } else {
        return NextResponse.json(loadouts)
    }
}

export async function POST(request: Request){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({
            error: 'You must be signed in to view the protected content on this page.',
            status: 401
        })
    }
    const {id} = session.user
    const {name, items} = await request.json()
    const loadout = await prisma.loadout.create({
        data: {
            name,
            user: {
                connect: {
                    id
                }
            },
            items: {
                create: items
            }
        }
    })
    return NextResponse.json(loadout)
}


export async function DELETE(request: Request){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({
            error: 'You must be signed in to view the protected content on this page.',
            status: 401
        })
    }
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    const loadout = await prisma.loadout.delete({
        where: {
            id: Number(id)
        }
    })
    return NextResponse.json(loadout)
}

export async function PUT(request: Request){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({
            error: 'You must be signed in to view the protected content on this page.',
            status: 401
        })
    }
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    const {name, items} = await request.json()
    const loadout = await prisma.loadout.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            items: {
                deleteMany: {},
                create: items
            }
        }
    })
    return NextResponse.json(loadout)
}