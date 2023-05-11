import { NextRequest, NextResponse } from 'next/server';
import {PrismaClient} from "@prisma/client";
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function handler(req: NextRequest, res: NextResponse){
    //@ts-ignore
    const session = await getServerSession(req, res, authOptions)
    if(!session){
        return NextResponse.redirect('/auth/signin')
    }
    if(req.method === 'POST'){
        const {name, items} = await req.json()
        const {id} = session.user
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
        return NextResponse.json({
            status: 200,
            body: loadout
        })
    } else if(req.method === 'GET'){
        const {id} = session.user
        const loadouts = await prisma.loadout.findMany({
            where: {
                userId: id
            },
            include: {
                items: true
            }
        })
        return NextResponse.json({
            status: 200,
            body: loadouts
        })
    } else if(req.method === 'DELETE'){
        const {searchParams} = new URL(req.url)
        const id = searchParams.get('id')
        const loadout = await prisma.loadout.delete({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json({
            status: 200,
            body: loadout
        })
    } else if(req.method === 'PUT'){
        const {searchParams} = new URL(req.url)
        const id = searchParams.get('id')
        const {name, items} = await req.json()
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
        return NextResponse.json({
            status: 200,
            body: loadout
        })
    }
}