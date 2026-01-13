type TodoBtnAddProps = {
    onClick?: () => void;
};

export default function TodoBtnAdd({ onClick }: TodoBtnAddProps) {
    return <button className="w-1/2 h-10 bg-blue-500/20 text-white rounded-md hover:bg-blue-600" onClick={onClick}>Add Todo</button>;
}