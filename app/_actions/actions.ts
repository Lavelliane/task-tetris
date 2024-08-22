'use server';

import { revalidateTag } from 'next/cache';

export const HandleAddTask = async (data, onClose, userId) => {
	try {
		const response = await fetch('/api/task', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: data.title, description: data.description, userId: userId }),
		});

		console.log(response);
		revalidateTag('tasks');
		onClose();
	} catch (error) {
		console.error(error);
	}
};
