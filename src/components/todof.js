import React from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import {useState} from 'react';

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')


    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)  
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
          if(e.key === "Enter") {
              handleSubmit(e)
          }
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>

           <Input placeholder="Enter text..." inputProps={{ 'aria-label': 'description' }} 
                  value={userInput}
                  type="text"
                  onChange={handleChange}
                  onKeyDown={handleKeyPress} 
           />
        
        <Button variant="contained" color="primary" disableElevation>
        Add a new task
        </Button>

           </form> 
        </div>
    );
}

export default ToDoForm;