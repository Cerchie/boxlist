import React, {useState} from 'react';



const Todo = (props) => {
    const handleRemove = () => props.remove(props.id);
console.log(props.text)

   return (<div>
        {props.text}
        <button id="delete-btn" onClick={handleRemove}>X</button>
    </div>)
            
}

export default Todo;