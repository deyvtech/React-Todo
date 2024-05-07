import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const EditModal = () => {
	const { dispatch, editModal, setEditModal, setId, id } = useTodo();
	const [todo, setTodo] = useState("");

	const handleCloseModal = () => {
		setEditModal((prev) => !prev);
		setId("");
		setTodo("");
	};

	const handleUpdateTodo = () => {
		dispatch({ type: "UPDATE_TODO", payload: { id: id, todoName: todo } });
		setTodo("");
		setEditModal((prev) => !prev);
		setId("");
	};

	return (
		<>
			{editModal && (
				<div className="text-white backdrop-blur-sm bg-black/0 absolute  inset-0 flex items-center justify-center">
					<div className="w-[500px]  py-6  bg-[#1A1A1C] rounded-md">
						<h2 className="text-xl pb-4 px-10 border-b border-slate-400">
							Update Todo
						</h2>
						<input
							type="text"
							className="w-[calc(100%-80px)] rounded-sm mt-4 p-2 text-black mx-10"
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
						/>
						<div className="px-10 mt-10 flex justify-end gap-4">
							<button
								className="bg-red-400 px-10 py-2 rounded-sm"
								onClick={handleCloseModal}
							>
								Close
							</button>
							<button
								className="bg-green-400 px-10 py-2 rounded-sm"
								onClick={handleUpdateTodo}
							>
								Update
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default EditModal;
