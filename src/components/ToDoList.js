import React from 'react';
import {useState} from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';




function ToDoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    
    const [value, setValue] = useState('')
  

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }
        
        
            
    

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}> 
                    
                    {
                        edit === item.id ?
                              <div> 
                                  <Input value={value} onChange={(e) => setValue(e.target.value)}/>      

                              </div> :
                              <div> { item.title } </div>

                    }

                        {
                            edit === item.id ?
                            <div>
                               <Button variant="contained" onClick={ () => saveTodo(item.id)}>save</Button>
                            </div>:
                            <div>
                                

                                <Button variant="outlined" color="primary" onClick={ () => editTodo(item.id, item.title) }>edit</Button>
                                <Button variant="outlined" color="primary" onClick={ () => deleteTodo(item.id) }>delete</Button>
                            </div>

                        }    
                           </div> 
                ))
            }
                </div>              
    )

        }

export default ToDoList;