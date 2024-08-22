'use client';
import React, { useState } from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
	Textarea,
} from '@nextui-org/react';
import { useUser } from '@clerk/clerk-react';
import { useForm } from 'react-hook-form';
import { ListPlus } from '@phosphor-icons/react';

export default function AddTaskModal() {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const { user, isLoaded } = useUser();

	const { register, handleSubmit } = useForm();
	// const [data, setData] = useState('');

	if (!isLoaded) {
		// Handle loading state however you like
		return null;
	}

	console.log(user);
	const HandleAddTask = async (data) => {
		console.log(data, data.title, data.description, user.id);
		try {
			const response = await fetch('/api/task', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title: data.title, description: data.description, userId: user.id }),
			});

			console.log(response);
			onClose();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<Button onPress={onOpen} className='w-full h-full'>
				<ListPlus size={60} weight='bold' className=' text-stone-600 ' />
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Add New Task</ModalHeader>
							<ModalBody>
								<form onSubmit={handleSubmit(HandleAddTask)} className='flex flex-col gap-4'>
									<Input {...register('title')} placeholder='Title' />
									<Textarea {...register('description')} placeholder='Description' />

									<div className='flex gap-4 w-full justify-end'>
										<Button color='danger' variant='light' onPress={onClose}>
											Close
										</Button>
										<Button color='primary' type='submit'>
											Add
										</Button>
									</div>
								</form>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
