import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import {TodoProvider} from "./context/TodoContext";

function App() {
	return (
		<>
			<TodoProvider>
				<main className="h-screen bg-[#14100C]">
					<div className="flex flex-col items-center justify-center pt-40 w-[800px] mx-auto ">
						<h1 className="text-3xl text-white font-bold text-left mb-4  py-2 pr-5 w-full uppercase">
							Add To-Do List
						</h1>
						<AddTodo />
						<TodoContainer/>
					</div>
				</main>
			</TodoProvider>
		</>
	);
}

export default App;
