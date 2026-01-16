import TodoDelete from "./tododelete";

type Todo = {
    id: number;
    [key: string]: any;
};

type TodocomponentProps = {
    todo?: Todo;
    handleDelete?: () => void;
    handleUpdate?: (text: string) => void;
};

export default function TodoComponent({todo, handleDelete, handleUpdate} : TodocomponentProps) {
  return (
    <div className="flex justify-center items-center w-1/2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
      <input className="w-full h-1/16 p-2 border border-zinc-300 rounded-md dark:bg-zinc-800 dark:border-zinc-800 dark:text-zinc-200 select-none" placeholder="Todo Component" value={todo?.text || ""} onChange={(e) => handleUpdate?.(e.target.value)}/>
      <TodoDelete onClick={handleDelete} />
    </div>
  

  );
};