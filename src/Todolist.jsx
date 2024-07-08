/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;