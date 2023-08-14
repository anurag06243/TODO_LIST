import React from "react";

export default function todoprint(promp) {
  let todostyle = {
    width: "18 rem",
    background: "olive",
  };
  return (
    <div className="container">
      <div className="card" style={todostyle}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{promp.todo.id}</h5>
          <p className="card-text">{promp.todo.description}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              promp.onDelete(promp.todo);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
