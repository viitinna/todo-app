import React from 'react';
import './App.css';
import {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { Container } from '@material-ui/core';


function App() {

  const [todo, setTodo] = useState([
     {
       id: 1,
       title: 'first todo',
       status: true
     },
     {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    }
  ])

  return (
    <div className="App">
      <Container maxWidth="sm">
      <header className="App-header">
      <h1>ToDo List</h1>

        <ToDoForm todo={todo} setTodo={setTodo}/>
        
        <ToDoList todo={todo} setTodo={setTodo}/>
        
      </header>
      </Container>
    </div>
  );
}

export default App;
