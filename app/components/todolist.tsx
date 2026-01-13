import TodoComponent from "./todocomponent"

type TodoBtnAddProps = {
    onClick?: () => void;
    todonum: string[];
    handleDelete?: (index: number) => void;
};

export default function TodoList({ todonum, handleDelete }: { todonum: string[]; handleDelete?: (index: number) => void }) {
    return <div className="flex flex-col justify-center items-center gap-4 w-full">
        {todonum.map((todo, index) => (
                <TodoComponent todo={todo} key={index} handleDelete={() => {handleDelete?.(index)}} />
        ))}
    </div>
};