type TodoBtnAddProps = {
    onClick?: () => void;
};

export default function TodoDelete({ onClick }: TodoBtnAddProps) {
    return <button className="w-1/25 h-10 bg-blue-500/20 text-white hover:bg-blue-600" onClick={onClick}>-</button>;
}