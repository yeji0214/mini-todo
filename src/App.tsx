import React from 'react';
import './App.css';
import TodoInputBar from './components/TodoInputBar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <TodoInputBar />
      <TodoList />
    </div>
  );
}

export default App;
