/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Todo = ({ todo, removeTodo }) => {
  return (
    <li>
      {todo.text} <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default Todo;