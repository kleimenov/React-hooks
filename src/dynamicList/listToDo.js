import React,  { useState, useEffect, useCallback } from 'react';
import ToDos from './toDo';

const ListToDo = ({listOfTasks}) => {


    const [listToDo, setListToDo] = useState([]);

    console.log(listOfTasks)

    useEffect(()=>{
        setListToDo(listOfTasks)
    },[])


    console.log(listToDo)
    return(
        <div>
            <h1>Hello from todo</h1>
            <ul>
                {
                listToDo.map(item => (
                    <ToDos key={item.id} todoItem={item.name} />
                ))
                }
            </ul>
        </div>
    )
}

export default ListToDo;