import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header';
import TodosInput from './TodosInput';
import TodosItem from './TodosItem';

export interface TodoItems{
    id:number;
    title:string;
    status:boolean
}

const Todos = () => {
    const [todos, setTodos]= useState<TodoItems[]>([]);

    const addTodoHandler= (title:string)=>{
        if(title){
            const payload={
                // id:todos.length+1,
                title,
                status:false
            }
            // setTodos([...todos, payload])
            axios.post("http://localhost:8080/todos", payload)
            .then(getTodos)
        }
    }

    const getTodos=()=>{
       axios.get("http://localhost:8080/todos")
       .then(({data}:{data:TodoItems[]})=>{
        setTodos(data)
       })
    }

    useEffect(()=>{
        getTodos()
    },[])

  return (
    <div>
        <Header label='Todos' />
        <TodosInput addTodoHandler={addTodoHandler} />
        {
            todos.length>0 && todos.map((item)=>{
                return <TodosItem key={item.id} {...item}/>
            })
        }
    </div>
  )
}

export default Todos