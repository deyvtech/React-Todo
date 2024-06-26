import React from "react";
const TodoList = ({ todoItem, handleDeleteTodo, handleCompletedTodo, handleEditTodo }) => {

	return (
		<li className={`flex items-center custom-transition  p-4 bg-[#cbcbf90b] ${todoItem.isCompleted && 'bg-[#5F606A]'}`}>
			<label className="container-checkbox mr-4">
				<input type="checkbox" />
				<svg
					viewBox="0 0 64 64"
					height="1em"
					width="1em"
					onClick={() => handleCompletedTodo(todoItem.id)}
				>
					<path
						d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
						pathLength="575.0541381835938"
						className="path"
					></path>
				</svg>
			</label>
			<p className={`text-xl text-white ${todoItem.isCompleted && 'line-through'}`}>{todoItem.todoName}</p>
			<div className="flex gap-4 ml-auto">
				<button
					className="group custom-transition btn-styles"
					onClick={() => handleEditTodo(todoItem.id)}

				>
					<span className="icon-[tabler--edit] custom-transition  group-hover:text-black text-[#fcaf3c]" />{" "}
					Edit
				</button>
				<button className="group btn-styles"
					onClick={() => handleDeleteTodo(todoItem.id)}
				>
					<span className="icon-[tabler--trash] custom-transition  group-hover:text-black text-[#fcaf3c]" />{" "}
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoList;
