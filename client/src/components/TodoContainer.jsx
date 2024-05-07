import React from "react";
import TodoList from "../components/TodoList";
import { useTodo } from "../context/TodoContext";

const TodoContainer = () => {
	const { todoList, dispatch } = useTodo();

	const handleDeleteTodo = (todoId) => {
		
		dispatch({ type: "DELETE_TODO", payload: todoId });
	};

	const handleCompletedTodo = (todoId) => {
		dispatch({ type: "COMPLETE_TODO", payload: todoId });
	};

	return (
		<ul className="w-full  ">
			{todoList?.map((todo) => (
				<TodoList
					todoItem={todo}
					key={todo.id}
					onDeleteTodo={handleDeleteTodo}
					onCompletedTodo={handleCompletedTodo}
				/>
			))}
		</ul>
	);
};

export default TodoContainer;
