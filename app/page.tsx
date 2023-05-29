import { getAllTodos } from "@/api";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";

const Home = async () => {
  const tasks = await getAllTodos();

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
};

export default Home;
