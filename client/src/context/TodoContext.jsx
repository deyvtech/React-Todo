import React, {createContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
	todoList: [],
};

const reducer = (state, action) => {
	switch (action.type) {
	    case "ADD_TODO":
	        return {...state, todoList: [...state.todoList, action.payload]}
    }
    return state
};

const TodoProvider = ({ children }) => {
    const [{ todoList }, dispatch] = useReducer(reducer, initialState);
    console.log(todoList)
	return (
		<TodoContext.Provider value={{todoList, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoProvider, TodoContext };
