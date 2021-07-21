import React from 'react';

const ToDos = ({todoItem}) => {
    console.log(todoItem)
    return (
        <li>{todoItem}</li>
    )
}

export default ToDos;