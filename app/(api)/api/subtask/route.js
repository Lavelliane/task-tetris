import prisma from "@/lib/db"
import { NextResponse } from "next/server"


export async function POST(req){
    const body = await req.json()
    const { title, completed, taskId } = body

    try {
        const subtask = await prisma.subtask.create({ 
            data: {
                title,
                completed,
                taskId
            }
        })
        if(subtask){
            return NextResponse.json({ subtask }, { status: 201 })
        }
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'An error has occurred' }, { status: 500 })
    }
}