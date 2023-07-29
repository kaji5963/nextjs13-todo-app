import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
  // no-store指定でSSR
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" });
  const todos = res.json();

  return todos;
};

export const addTodo = async (todo: Todo): Promise<Todo> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};

export const editTodo = async (id: string, newText: string): Promise<Todo> => {
  // no-store指定でSSR
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = res.json();

  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  // no-store指定でSSR
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
  const deleteTodo = res.json();

  return deleteTodo;
};
