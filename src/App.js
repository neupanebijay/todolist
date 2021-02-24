import { useState } from 'react';
import "./App.css";
import { Todo } from './component/Todo.comp';
import { TodoForm } from './component/TodoForm.com';

function App() {
  const [todos, setTodos] = useState([
    {
      name: 'Bijay',
      address: 'NSW',
      program: 'JAVA',
      isCompleted: true
    },
    {
      name: 'Bijay1',
      address: 'AUS',
      program: '.net',
      isCompleted: true

    },
    {
      name: 'Bijay2',
      address: 'WA',
      program: 'JAVAscript',
      isCompleted: false

    },
    {
      name: 'Bijay3',
      address: 'QLD',
      program: 'C++',
      isCompleted: false

    },
    {
      name: 'Bijay4',
      address: 'SA',
      program: 'react',
      isCompleted: true

    }
  ])

  // addTodo area
  const addTodo = name => {
    const newTodos = [ ...todos, {name}]
    setTodos(newTodos);
  }

  // completeTodo part

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  // remove Todo
  const removeTodo = index => {
    const newTodo = [...todos]
    // splice is to add or remove item, inthis case remove and by 1
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index)=> (
          <Todo key= {index} index= {index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ) )}

        
        <TodoForm  addTodo={addTodo}/>
          
      </div>
      
    </div>
  );
}

export default App;
