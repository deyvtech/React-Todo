import noteAdd from "./assets/note-add.svg";

function App() {
	return (
		<>
			<main className="h-screen bg-[#14100C]">
				<div className="flex flex-col items-center justify-center pt-40 w-[800px] mx-auto ">
					<h1 className="text-3xl text-white font-bold text-left mb-4  py-2 pr-5 w-full uppercase">
						Add To-Do List
					</h1>
					<div className="w-full bg-[#001220] relative">
						<input
							type="text"
							className="h-full px-4 placeholder:text-black py-2 w-full text-xl bg-[#EEEEF0]"
							placeholder="What do you need to do?"
						/>
						<button
							type="submit"
							className="w-10 right-0 absolute z-1 inset-y-0"
						>
							<img src={noteAdd} alt="" />
						</button>
					</div>
					<ul className="w-full  ">
						<li className="flex items-center  p-4 bg-[#cbcbf90b]">
							<label className="container-checkbox mr-4">
								<input type="checkbox" />
								<svg
									viewBox="0 0 64 64"
									height="1em"
									width="1em"
								>
									<path
										d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
										pathLength="575.0541381835938"
										className="path"
									></path>
								</svg>
							</label>
							<p className="text-xl text-white">Do laundry</p>
							<div className="flex gap-4 ml-auto">
								<button className="group custom-transition btn-styles">
									<span className="icon-[tabler--edit] custom-transition  group-hover:text-black text-[#fcaf3c]" />{" "}
									Edit
								</button>
								<button className="group btn-styles">
									<span className="icon-[tabler--trash] custom-transition  group-hover:text-black text-[#fcaf3c]" />{" "}
									Delete
								</button>
							</div>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default App;
