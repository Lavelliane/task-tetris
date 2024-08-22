import React from 'react';
import TaskLayout from '@/layouts/TaskLayout';

async function DashboardPage() {
	return (
		<main className='max-w-6xl w-full flex items-start min-h-[80vh] h-fit mx-auto'>
			<TaskLayout />
		</main>
	);
}

export default DashboardPage;
