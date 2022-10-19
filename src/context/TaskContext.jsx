import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	function createTask(task) {
		setTasks([
			...tasks,
			{
				id: tasks.length,
				title: task.title,
				description: task.description,
			},
		]);
	}
	function deleteTask(taskID) {
		setTasks(tasks.filter((task) => task.id !== taskID));
	}
	useEffect(() => {
		setTasks(data);
	}, []);

	return (
		<TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
			{" "}
			{props.children}
		</TaskContext.Provider>
	);
}
