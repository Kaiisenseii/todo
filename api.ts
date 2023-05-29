import { TaskProps } from "./types/task";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<TaskProps[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-cache" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: TaskProps): Promise<TaskProps> => {
  const res = await fetch(`${baseUrl}'/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();
  return newTodo;
};
