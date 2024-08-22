'use client';
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import AddTaskModal from './AddTaskModal';

export default function AddTaskCard(props) {
	const router = useRouter();

	return (
		<Card className='max-w-[320px] w-full h-36 hover:scale-[102%] cursor-pointer flex items-center justify-center'>
			<AddTaskModal />
		</Card>
	);
}
