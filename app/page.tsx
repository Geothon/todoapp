'use client';
import React from 'react';
import TodoComponent from './components/todocomponent';
import TodoList from './components/todolist';
import TodoBtnAdd from './components/todoaddbutton';

export default function Home() {
  const [todoTracker, setTodoTracker] = React.useState<string[]>([""]);
  
  const handleAddTodo = () => {
    setTodoTracker([...todoTracker, ""]);
  };
  
  const handleDeleteTodo = (index: number) => {
    const newTodos = todoTracker.filter((_, i) => i !== index);
    setTodoTracker(newTodos);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col gap-4 py-10">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">Todo App</h1>
      <TodoList todonum={todoTracker} handleDelete={handleDeleteTodo} />
      <TodoBtnAdd onClick={handleAddTodo} />
    </div>
  );
}