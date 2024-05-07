import React from "react";
import TodoList from "../components/TodoList";
import { useTodo } from "../context/TodoContext";

const TodoContainer = () => {
	const { todoList, dispatch, setEditModal, setId } = useTodo();

	const handleDeleteTodo = (todoId) => {

		dispatch({ type: "DELETE_TODO", payload: todoId });
	};

	const handleCompletedTodo = (todoId) => {
		dispatch({ type: "COMPLETE_TODO", payload: todoId });
	};

	const handleEditTodo = (todoId) => {
		setEditModal(prev => !prev)
		setId(todoId)
	}

	return (
		<ul className="w-full  ">
			{todoList?.map((todo) => (
				<TodoList
					todoItem={todo}
					key={todo.id}
					handleDeleteTodo={handleDeleteTodo}
					handleCompletedTodo={handleCompletedTodo}
					handleEditTodo={handleEditTodo}
				/>
			))}
		</ul>
	);
};

export default TodoContainer;
