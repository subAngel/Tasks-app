import TaskCard from "./TaskCard.jsx";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export function TaskList() {
	const { tasks } = useContext(TaskContext);
	if (tasks.length === 0) {
		return (
			<h2 className="text-white text-4xl font-bold text-center">
				No hay tareas aun
			</h2>
		);
	}

	return (
		<div className="grid grid-cols-3 gap-2 p-4">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}
