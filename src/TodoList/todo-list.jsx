import { useRef, useState, useEffect } from "react";
import { Todo } from "./todo";
import { getQueryString } from "./utils";
import { Todos } from "./Todos";
import { TodoFilter } from "./TodoFilter";
import Form from "./Form";

export function TodoList() {

  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");


  const [editID, setEditID] = useState(null);

  // useRef giúp biến của chúng ta không bao giờ tạo mới lại khi re-render.

  const inputRef = useRef(null);

  
  const onDeleteTodo = (event) => {
    const id = +event.currentTarget.dataset.id;

    setTodos((tds) => {
      return tds.filter((t) => t.id !== id);
    });
  };

  const onEditTodo = (event) => {
    // Cập nhật lại ô input
    inputRef.current.value = event.currentTarget.dataset.text;

    // Cập nhật lại editID
    setEditID(+event.currentTarget.dataset.id);
  };

  const onSubmitTodo = (event) => {
    event.preventDefault();

    if (editID) {
      const id = editID;
      const tempValue = inputRef.current.value;

      setTodos((todos) => {
        // lấy Todo cần update
        const todo = todos.find((t) => t.id === id);
        // Tạo todo
        todo.text = tempValue;

        return [...todos];
      });

      // Cập nhật lại editId
      setEditID(null);
    } else {
      const newTodo = new Todo(inputRef.current.value);

      // Cập nhật lại list todo.
      setTodos((c) => [newTodo, ...c]);
    }

    // Focus + reset input.
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  useEffect(() => {
    // Khôi phục lại giá trị của ô input
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((resp) => resp.json())
      .then((resp) => {
        inputRef.current.value = resp.title;
      });
  }, []);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      console.log(search);
    }, 200);
    // 200 > 10ms

    return () => {
      clearTimeout(idTimeout);
    };
  }, [search]);

  // const inputSearchRef = useRef(null);

  useEffect(() => {
    const search = getQueryString("q");


    setSearch(search);
  }, []);

  return (
    <>
      {/* two way binding */}
      <TodoFilter setTodos={setTodos} search={search} setSearch={setSearch} />
      <hr />
      <Form onSubmit={onSubmitTodo} editID={editID} ref={inputRef} />
      <Todos data={todos} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} />
    </>
  );
}

const c = 20;

function sum(a, c, d) {
  let b = 10;

  return a + b + Math.random();
}

sum(3); 
sum(3); 

sum(3); 
sum(3); 
sum(3); 
sum(3); 
