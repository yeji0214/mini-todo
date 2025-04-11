import React from 'react';
import './App.css';
import TodoInputBar from './components/TodoInputBar';
import TodoList from './components/TodoList';
import logo from '/assets/logo.png'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-[350px] shadow-lg border rounded-lg p-4 bg-white">
        <img src="/assets/logo.png" alt="로고" className="w-[200px]" />
        <TodoInputBar />
        <TodoList />
      </div>
    </div>
  );
  
}

export default App;
