import React from "react";
import noteAdd from "../assets/note-add.svg";
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
	const { dispatch } = useContext(TodoContext);
	const [todo, setTodo] = useState("");

	const addTodo = (event) => {
		event.preventDefault();
		dispatch({
			type: "ADD_TODO",
			payload: { isCompleted: false, todoName: todo, id: Date.now() },
		});
		setTodo("");
	};

	return (
		<div className="w-full bg-[#001220] relative">
			<input
				type="text"
				className="h-full px-4 placeholder:text-black py-2 w-full text-xl bg-[#EEEEF0]"
				placeholder="What do you need to do?"
				value={todo}
				onChange={(e) => setTodo(() => e.target.value)}
			/>
			<button
				type="submit"
				className="w-10 right-0 absolute z-1 inset-y-0"
				onClick={addTodo}
			>
				<img src={noteAdd} alt="" />
			</button>
		</div>
	);
};

export default AddTodo;
