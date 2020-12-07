import React, {useState} from 'react';

import Box from './Box'
import NewBoxForm from './NewBoxForm'

import {v4 as uuid} from 'uuid';

const BoxList = () => {
const INITIAL_STATE = [
    {id: uuid(), width: '200', height: '80', backgroundColor: 'red'},
]
const [boxes, setBoxes] = useState(INITIAL_STATE)

const addBox = (newBox) => {
setBoxes(boxes => [...boxes, {...newBox, id: uuid() }])
}
const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };
return (
    <div>
        <h3>Box List</h3>
        <NewBoxForm addBox={addBox} />
        <div>
            {boxes.map((box) => <Box 
            key={box.id} 
            id={box.id} 
            backgroundColor={box.backgroundColor} 
            width={box.width} 
            height={box.height} 
            remove={remove}/>)}
        </div>
    </div>
)
}
export default BoxList;