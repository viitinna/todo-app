import React from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';


function ToDoForm({todo, setTodo}) {

    const [value, setValue] = useState('')
    
      function saveTodo() {
          setTodo(
              [...todo, {
                  id: uuidv4(),
                  title: value,
                  status: true
              }]
          )
          setValue('')
      }

    return (
        <div>
           
           <Input 
           placeholder="Enter text..." value={value} 
           onChange={ (e) => setValue(e.target.value) }
           inputProps={{ 'aria-label': 'description' }} 
           />
        
        <Button onClick={saveTodo} variant="contained" color="primary" disableElevation>
        Add a new task
        </Button>
           
        </div>
    );
}

export default ToDoForm;