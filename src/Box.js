import React, {useState} from 'react';

const Box = (props) => {
    console.log(props.height)
    console.log(props.remove)

    const handleRemove = () => props.remove(props.id);
    return (
        <>
        <div style={{backgroundColor: props.backgroundColor, width: props.width + 'px', height: props.height + 'px'}}>
        COLORBOX 
        </div>
        <button id="delete-btn" onClick={handleRemove}>X</button>
        </>
    )
}

export default Box;