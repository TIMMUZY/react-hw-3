import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import './style.css';


function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const[status, setStatus] = useState('all');

  const setKey = (key, id) => {
    setData(data.map(item => {
      if (item.id == id) {
        return {
          ...item,
          [key]: !item[key]
        }
      }else {
        return item
      }
    }))
  }




  useEffect(() => {
    switch (status) {
      case 'cart': {
        setList(data.filter( item => item.deleted));
        break
      }

      case 'active':{
        setList(data.filter( item => !item.deleted && !item.completed ));
        break
      }

      case 'completed':{
        setList(data.filter( item => !item.deleted && item.completed ));
        break
      }

      default: {
        setList(data.filter(item => !item.deleted))
      }
    }
  }, [data, status])
  return (
    <div className="todo">
      <Form data={data} setData={setData} />
      <TodoList 
      status={status} 
      setStatus={setStatus} 
      setKey={setKey} 
      list={list} />
    </div>
  );
}

export default App;