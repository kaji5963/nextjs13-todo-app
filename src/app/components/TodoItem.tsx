"use client";

import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../types";
import { deleteTodo, editTodo } from "../api";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodo, setEditingTodo] = useState(todo.text);
  const ref = useRef<HTMLInputElement>(null);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await editTodo(todo.id, editingTodo);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow my-3"
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 px-2 rounded border-gray-400 border"
          value={editingTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditingTodo(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSave} className="text-blue-500 mr-3">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="text-green-500 mr-3">
            Edit
          </button>
        )}

        <button onClick={handleDelete} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
};
