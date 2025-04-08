const TodoInputBar = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[300px] flex gap-2">
          <input
            type="text"
            id="input"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm outline-none"
            placeholder="새로운 할 일 추가"
          />
          <button
            type="button"
            className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-400 transition"
          >
            +
          </button>
        </div>
      </div>
    );
  };

export default TodoInputBar;