import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Mycomponents/header";
import Footer from "./Mycomponents/footer";
import Todos from "./Mycomponents/todos";
import Addtodo from "./Mycomponents/addtodo";

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") !== null)
    initTodo = JSON.parse(localStorage.getItem("todos"));
  const onDelete = (todo) => {
    console.log(todo);
    setTodos(
      todos.filter((todox) => {
        return todox !== todo;
      })
    );
    // localStorage.setItem("todos", JSON.stringify(todos));
  };
  const Addtodoo = (title, desc) => {
    let sno = 1;
    if (todos.length !== 0) sno = todos[todos.length - 1].id + 1;
    const myTodo = {
      id: sno,
      title: title,
      description: desc,
    };
    // console.log(todos);
    setTodos([...todos, myTodo]);
    // console.log(todos.length);
  };
  // let todo = [
  //   {
  //     id: 1,
  //     description: "go to school",
  //   },
  //   {
  //     id: 2,
  //     description: "do homeqpkd",
  //   },
  //   {
  //     id: 3,
  //     description: "kaise ho",
  //   },
  // ];
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // console.log(todos.length);

  return (
    <>
      <Header />
      <Addtodo onSubmit={Addtodoo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
