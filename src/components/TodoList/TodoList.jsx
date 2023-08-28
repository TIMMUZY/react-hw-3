import Btn from "./Button";

const TodoList = ({ list, setKey, setStatus, status }) => {

  return (
    <div className="todo-list">
      <div className="todo-list-filter">
        <button
          onClick={() => {
            setStatus("all");
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            setStatus("active");
          }}
        >
          active
        </button>
        <button
          onClick={() => {
            setStatus("completed");
          }}
        >
          complete
        </button>
        <button
          onClick={() => {
            setStatus("cart");
          }}
        >
          cart
        </button>
      </div>
      {list.map((item) => {
        return (
          <div key={item.id} className="todo-list-item">
            <p>{item.text}</p>
            <Btn item={item} setKey={setKey} status={status} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
