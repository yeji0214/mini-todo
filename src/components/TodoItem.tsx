import "../styles/TodoItem.css";

type TodoItemType = {
    content: string;
    id: string;
    checked: boolean;
}

const TodoItem = ({ content, id, checked }: TodoItemType) => {
    return (
        <div className="todo-item">
            <input defaultChecked={checked} value={content} name="todo" type="checkbox" id={id} />
            <label htmlFor={id}>{content}</label>
        </div>
    );
};

export default TodoItem;