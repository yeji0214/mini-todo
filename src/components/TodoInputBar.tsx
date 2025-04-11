import { useRef } from "react";

const TodoInputBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        if (inputRef.current) {
            alert(inputRef.current.value);
        }
    }
    return (
      <div className="flex items-center justify-center w-full">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            id="input"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm outline-none"
            placeholder="새로운 할 일 추가"
          />
          <button
            type="button"
            className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-400 transition"
            onClick={addTodo}
          >
            +
          </button>
        </div>
      </div>
    );
  };

export default TodoInputBar;