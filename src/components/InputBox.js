import React from 'react';
import './InputBox.css'

const InputBox = (props) => {
    return (
        <div className="input">
            {props.children}
        </div>
    )
}

export default InputBox
