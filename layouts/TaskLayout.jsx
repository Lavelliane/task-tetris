import React from 'react';
import TaskCard from '@/components/TaskCard';
import AddTaskCard from '@/components/AddTaskCard';

const TaskLayout = async () => {
	const getTasks = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/task', {
				cache: 'no-cache',
			});

			const data = await response.json();

			console.log(data);
			return data;
		} catch (error) {
			console.error(error);
		}
	};

	const tasks = await getTasks();
	console.log(tasks);

	return (
		<div className='w-full h-fit flex flex-wrap'>
			{tasks?.map((task) => (
				<TaskCard key={task.id} title={task.title} description={task.description} id={task.id} userId={task.userId} />
			))}
			<AddTaskCard />
		</div>
	);
};

export default TaskLayout;
