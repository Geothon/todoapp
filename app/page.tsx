'use client';
import React from 'react';
import TodoComponent from './components/todocomponent';
import TodoList from './components/todolist';
import TodoBtnAdd from './components/todoaddbutton';

export default function Home() {

  type Todo = {
    id: number;
    text: string;
  };
  
  const [todoTracker, setTodoTracker] = React.useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  // Load todos from localStorage on mount
  React.useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodoTracker(JSON.parse(savedTodos));
    } else {
      setTodoTracker([{id: Date.now(), text: ""}]);
    }
    setIsLoaded(true);
  }, []);
  
  // Save todos to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoTracker));
  }, [todoTracker]);
  
  const handleAddTodo = () => {
    setTodoTracker([...todoTracker, {id: Date.now(), text: ""}]);
  };
  
  const handleDeleteTodo = (id: number) => {
    setTodoTracker(todos => todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, text: string) => {
    setTodoTracker(todos => 
      todos.map(todo => todo.id === id ? { ...todo, text } : todo)
    );
  };

  return (
    <div className="flex min-h-screen items-center bg-zinc-50 font-sans dark:bg-black flex-col gap-4 py-10">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">Todo App</h1>
      {isLoaded && <TodoList todonum={todoTracker} handleDelete={handleDeleteTodo} handleUpdate={handleUpdateTodo} />}
      {isLoaded && <TodoBtnAdd onClick={handleAddTodo} />}
    </div>
  );
}