import React from "react";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

const TodoContainer = () => {
	const { todoList } = useContext(TodoContext);
	return (
		<ul className="w-full  ">
			{todoList?.map((todo) => (
				<TodoList todoItem={todo} key={todo.id} />
			))}
		</ul>
	);
};

export default TodoContainer;
