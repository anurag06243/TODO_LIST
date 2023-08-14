import React from "react";
import Todoprint from "./todoprint";

export default function todos(promp) {
  return (
    <div>
      {promp.todos.length === 0
        ? "No work to display"
        : promp.todos.map((todo) => {
            return (
              // { console.log(todo.id) },
              <Todoprint key={todo.id} todo={todo} onDelete={promp.onDelete} />
            );
          })}
    </div>
  );
}
