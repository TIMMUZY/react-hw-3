const Btn = ({ item, setKey, status }) => {
  return (
    <div className="todo-list-item-btns">
      {status === "cart" ? (
        <>
          <button
            onClick={() => {
              setKey("delete", item.id);
            }}
          >
            restore
          </button>
          <button>delete</button>
        </>
      ) : 
        <>
          <button
            onClick={() => {
              setKey("completed", item.id);
            }}
          >
            complete{item.completed ? "+" : ""}
          </button>
          <button
            onClick={() => {
              setKey("deleted", item.id);
            }}
          >
            delete
          </button>
        </>
      }
    </div>
  );
};

export default Btn;
