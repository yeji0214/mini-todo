import "../styles/TodoItem.css";
import TodoItem from "./TodoItem";

const mock = [
    { id: "todo-1", content: "어쩌구구", checked: true },
    { id: "todo-2", content: "안녕하세요?", checked: false},
    { id: "todo-3", content: "React 공부하기", checked: false },
    { id: "todo-4", content: "디비 자기", checked: false },
  ];

const TodoList = () => {
    return (
        <div id="checklist">
            {
                mock.map((todo) => (
                    <TodoItem key={todo.id} content={todo.content} id={todo.id} checked={todo.checked}/>
                ))
            }
        </div>
    );
};

export default TodoList;