import React, { useState } from "react";
import {FcOk} from 'react-icons/fc'

const Root = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const newTodoHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const setTodoHandler = (event) => {
    const todoData ={
        id: todo.length === 0 ? 1 : todo[todo.length-1].id +1,
        listName:newTodo
    }
    event.preventDefault();
    setTodo([...todo, todoData]);
    setNewTodo("");
  };

  const completedTodoHandler =(id) => {
    setTodo(todo.filter((list) => {

      if(list.id === id) {
        return false
      }else{
        return true
      }
      }));
    

  }

  return (
    <div className=" bg-slate-200 max-w-[300px]  min-h-[400px] rounded-sm flex flex-col  items-center">
      <form action="" onSubmit={setTodoHandler}>
        <input
          type="text "
          required
          value={newTodo}
          onChange={newTodoHandler}
          className=" rounded-[20px] p-1 placeholder:p-2 shadow-md mt-3"
          placeholder="add Item"
        />
      </form>
      <div className="">
        {todo.map((list) => (
          <div className="flex flex-col gap-5 w-[200px] mt-3 mb-3">
            <div className="flex border-2 rounded-[10px] border-gray-400 gap-5  justify-between">

            <li className=" text-xl list-none pl-2">{list.listName}</li>
            <button onClick={() => (completedTodoHandler(list.id)) } className=" pr-3 cursor-pointer"><FcOk/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Root;
