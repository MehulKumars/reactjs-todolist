import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  const [todos,setTodos] = useState([],)
  const [todoValue,setTodoValue]=useState('')

  function persistData(newlist){
    localStorage.setItem('todos',JSON.stringify({todos:newlist }))
  }

  function handleAddTodo(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleDeleteTodo(index){
    const newTodoList =   todos.filter((todo,idx)=>{
      return index !== idx;
    })
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  function handleEditTodo(index){
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    handleDeleteTodo(index);
  }
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos);
  },[])
  return (
   <>
    <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
   </>
  )
}

export default App
  