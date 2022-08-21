import React, { useState } from 'react'
import Button from './Button';

interface TodosInputProps{
    addTodoHandler:(value:string)=>void;
}

const TodosInput = ({addTodoHandler}:TodosInputProps) => {
    const [inputText, setInputText]= useState<string>("");

    const changeHandler:React.ChangeEventHandler<HTMLInputElement>= (e) =>{
        setInputText(e.target.value)
    }
    const onClickHandler=()=>{
        addTodoHandler(inputText);
    }
  return (
    <div>
        <input value={inputText} onChange={changeHandler} />
        <Button label='Add todo' handleClick={onClickHandler} />
    </div>
  )
}

export default TodosInput