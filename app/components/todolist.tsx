import TodoComponent from "./todocomponent"

type Todo = {
    id: number;
    [key: string]: any;
};

type TodoListProps = {
    onClick?: () => void;
    todonum: Todo[];
    handleDelete?: (id: number) => void;
    handleUpdate?: (id: number, text: string) => void;
};

export default function TodoList({ todonum, handleDelete, handleUpdate }: TodoListProps) {
    return <div className="flex flex-col justify-center items-center gap-4 w-full">
        {todonum.map(todo => (
                <TodoComponent todo={todo} key={todo.id} handleDelete={() => {handleDelete?.(todo.id)}} handleUpdate={(text) => {handleUpdate?.(todo.id, text)}} />
        ))}
    </div>
};