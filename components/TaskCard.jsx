'use client';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider } from '@nextui-org/react';
import { ArrowCircleRight } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

export default function TaskCard(props) {
	const router = useRouter();

	const HandleRedirect = () => {
		router.push(userId);
	};

	return (
		<Card className='max-w-[320px] w-full hover:scale-[102%] cursor-pointer mr-4 mb-4' onClick={HandleRedirect}>
			<CardHeader className='flex gap-2'>
				<div className='flex flex-col'>
					<p className='text-lg font-semibold'>{props.title}</p>
				</div>
			</CardHeader>
			<CardBody>
				<p className='text-sm'>{props.description}</p>
			</CardBody>
			<Divider />
			<CardFooter className='flex justify-end w-full'>
				<ArrowCircleRight size={24} className=' text-stone-700' />
			</CardFooter>
		</Card>
	);
}
