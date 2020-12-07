import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const NewTodoForm = ({addTodo}) => {
const INITIAL_STATE = { text: ''
}
const [formData, setFormData] = useState(INITIAL_STATE);
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
}
const handleSubmit = (e) => {
e.preventDefault();
addTodo({...formData});
setFormData(INITIAL_STATE)
}

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo</label>
        <input 
        type="text" 
        name="text" 
        placeholder="todo item"
        value={formData.text}
        onChange={handleChange}
        />

<button>Add Todo</button>

    </form>
)
}

export default NewTodoForm;