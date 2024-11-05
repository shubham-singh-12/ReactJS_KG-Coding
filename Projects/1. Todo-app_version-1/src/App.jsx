import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem_1 from "./components/TodoItem_1";
import TodoItem_2 from "./components/TodoItem_2";

// External CSS file
import "./App.css";

function App() {

  return (
    <center className='todo-container'>

      {/* Heading */}
      <AppName />

      <div className='items-container'>
        {/* Input field to add Todo */}
        <AddTodo />

        {/* 1st Todo */}
        <TodoItem_1 />


        {/* 2nd Todo */}
        <TodoItem_2 />
      </div>
    </center>
  )
}

export default App;