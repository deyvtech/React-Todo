import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
	todoList: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return { ...state, todoList: [...state.todoList, action.payload] };
		case "DELETE_TODO":
			return { ...state, todoList: state.todoList.filter((todo) => todo.id !== action.payload) }
		case "COMPLETE_TODO":
			return {...state, todoList: state.todoList.map((todo) => todo.id === action.payload ? {...todo, isCompleted: !todo.isCompleted} : todo)}
		default:
			throw new Error("invalid action");
	}
	return state;
};


const TodoProvider = ({ children }) => {
	const [{ todoList }, dispatch] = useReducer(reducer, initialState);
	return (
		<TodoContext.Provider value={{ todoList, dispatch }}>
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
