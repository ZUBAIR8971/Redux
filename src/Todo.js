import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from "react-redux";

import { addTodo, listTodo } from './store/action/todo';

const Todo = (props) => {

    const [todoData, setTodoData] = useState('');

    const dispatch = useDispatch();
    const todoState = useSelector((state) => state.todo);

    const handleChange = (e) => {
        setTodoData(e.target.value);
    };

    const saveTodo = (e) => {
        e.preventDefault(); 

        // alert(todoData);
        // dispatch({ type: 'ADD_TODO', payload: todoData }); 
        dispatch(addTodo({id:4, title: todoData}));
        setTodoData('');    
    };

    useEffect(() => {
        dispatch(listTodo());
    }, []);

  return (
   <>
        <div className='mainDiv'>
            <div className='innerDiv'>
                <h1 className='mainDivHeading'>Add Todo</h1>
                <input placeholder={'Add Todo'} className='mainDivInput' onChange={(e) => handleChange(e)} value={todoData} />
                <button className='mainButton' onClick={(e) => saveTodo(e)}>Save</button>    

                <h1 className='mainDivHeading'>Todo List</h1>
                <ul className='mainDivUl'>
                    {
                        todoState && todoState.list.map((item, index) => {
                            return <li key={index} className='mainDivLI'>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        </div>
   </>
  )
}

export default Todo