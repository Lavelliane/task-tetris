'use client';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from '@nextui-org/react';
import { ArrowCircleRight } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

export default function TaskCard({ title, id, description, userId}) {
	const router = useRouter();

	const HandleRedirect = () => {
		console.log(userId);
		router.push('/task/' + userId);
	};

	return (
		<Card className='max-w-[320px] w-full h-fit hover:scale-[102%] mr-4 mb-4' isPressable onClick={HandleRedirect}>
			<CardHeader className='flex gap-2'>
				<div className='flex flex-col'>
					<p className='text-lg font-semibold'>{title}</p>
				</div>
			</CardHeader>
			<CardBody>
				<p className='text-sm'>{description}</p>
			</CardBody>
			<Divider />
			<CardFooter className='flex justify-end w-full gap-3'>
				<Button color='primary'>Generate</Button>
				<ArrowCircleRight size={24} className=' text-stone-700' />
			</CardFooter>
		</Card>
	);
}
