import { useState, useEffect, useRef, useLayoutEffect } from "react";
import useInput from "./useInput";

function writeTodosToLocalStorage(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

export default function useTodos() {
  const id = useRef(1);

  // 從 useInput 讀取 value 資料
  const { value, setValue, handleChange } = useInput();
  
  const [todos, setTodos] = useState(() => {
    // 把 todos 轉回陣列型態
    let todoData = JSON.parse(window.localStorage.getItem("todos")) || "";
    // 改由陣列長度判斷是否為空陣列
    if (todoData.length) {
      id.current = todoData[0].id + 1;
    } else {
      todoData = [];
    }
    return todoData;
  });

  useEffect(() => {
    writeTodosToLocalStorage(todos);
  }, [todos]);

  const handleBtnClick = () => {
    if (value.trim().length === 0) return
    setTodos([{
      id: id.current,
      content: value,
      isDone: false
    }, ...todos])
    setValue('')
    id.current++
  }

  // enter 新增 todo
  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    handleBtnClick();
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      // 如果不是要修改的 todo id 就直接回傳
      if (todo.id !== id) return todo;
      // 要修改的 todo id
      return {
        // todo 原本的東西
        ...todo,
        // 要修改的屬性
        isDone: !todo.isDone
      }
    }));
  }

  return {
    todos,
    setTodos,
    id,
    handleBtnClick,
    handleKeyDown,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    setValue,
    handleChange
  };
}