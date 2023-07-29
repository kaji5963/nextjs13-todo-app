import React from "react";
import { Todo } from "../types";
import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
    </ul>
  );
};
