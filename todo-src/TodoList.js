import React, {useState} from 'react';

import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

import {v4 as uuid} from 'uuid';

const TodoList = () => {
const INITIAL_STATE = [
    {id: uuid(), text: 'todo'},
]
const [todoes, setTodoes] = useState(INITIAL_STATE)

const addTodo = (newTodo) => {
setTodoes(todoes => [...todoes, {...newTodo, id: uuid() }])
}
const remove = id => {
    setTodoes(todoes => todoes.filter(todo => todo.id !== id));
  };
return (
    <div>
        <h3>Todo List</h3>
        <NewTodoForm addTodo={addTodo} />
        <div>
            {todoes.map((todo) => <Todo 
            key={todo.id} 
            id={todo.id} 
            text={todo.text}
            remove={remove}/>)}
        </div>
    </div>
)
}
export default TodoList;