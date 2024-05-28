import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

const todosData = [
  {
    id: uuidv4(),
    title: 'Read react documentation',
    desc: 'React documentation might be boring but I can do it'
  },
  {
    id: uuidv4(),
    title: 'Do react assignment',
    desc: 'React assignments might be boring but I can do it'
  }
];

const App = () => {
  const [todos, setTodos] = useState(todosData);

  // get the newTodo from NewTodo.js here inside this function
  const handleAddTodo = (todo) => {
    setTodos((oldTodo) => {
      return [...oldTodo, todo];
    });
  };
  console.log(todos);

  return (
    <div className="container">
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
