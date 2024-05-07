import React, {
	act,
	createContext,
	useContext,
	useReducer,
	useState,
} from "react";

const TodoContext = createContext();

const initialState = {
	todoList: [],
};

const reducer = (state, action) => {
	console.log(action.payload.todoName);
	switch (action.type) {
		case "ADD_TODO":
			return { ...state, todoList: [...state.todoList, action.payload] };
		case "DELETE_TODO":
			return {
				...state,
				todoList: state.todoList.filter(
					(todo) => todo.id !== action.payload
				),
			};
		case "COMPLETE_TODO":
			return {
				...state,
				todoList: state.todoList.map((todo) =>
					todo.id === action.payload
						? { ...todo, isCompleted: !todo.isCompleted }
						: todo
				),
			};
		case "UPDATE_TODO":
			return {
				...state,
				todoList: state.todoList.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, todoName: action.payload.todoName }
						: todo
				),
			};
		default:
			throw new Error("invalid action");
	}
	return state;
};

const TodoProvider = ({ children }) => {
	const [{ todoList }, dispatch] = useReducer(reducer, initialState);
	const [editModal, setEditModal] = useState(false);
	const [id, setId] = useState("");
	return (
		<TodoContext.Provider
			value={{ todoList, dispatch, editModal, setEditModal, id, setId }}
		>
			{children}
		</TodoContext.Provider>
	);
};

const useTodo = () => {
	const context = useContext(TodoContext);
	if (!context)
		throw new Error(
			"Todo Context was used outside <TodoProvider></TodoProvider>"
		);

	return context;
};

export { TodoProvider, useTodo };
