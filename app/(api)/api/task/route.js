import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request) {
	try {
		const body = await request.json();
		const { title, description, userId } = body;

		console.log(body);
		if (!title || !description || !userId) {
			return NextResponse.json({ message: 'Lacking information.' }, { status: 400 });
		}

		const task = await prisma.task.create({ data: body });
		return NextResponse.json({ message: task }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: 'Server Error', error }, { status: 500 });
	}
}

export async function GET(request) {
	try {
		const task = await prisma.task.findMany();
		return NextResponse.json(task, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: 'Server Error', error }, { status: 500 });
	}
}

export async function DELETE(request) {
	const { searchParams } = request.nextUrl;
	const { userId } = Object.fromEntries(searchParams.entries());

	console.log(userId);

	try {
		const task = await prisma.task.deleteMany({
			where: {
				userId: userId,
			},
		});

		return NextResponse.json({ message: 'Task Deleted Successfully' }, task, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: 'Server Error', error }, { status: 500 });
	}
}
