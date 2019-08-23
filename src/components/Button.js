import React from 'react';
import './Button.css';

const isOperator = val => !isNaN(val) || val==="." || val==="="

const Button = (props) => {
    const buttonText=props.children;
    return (
        <div className={`button ${isOperator(buttonText)?"":"operator"}`} 
        onClick={()=>props.handleClick(buttonText)}>{buttonText}</div>
    )
}

export default Button;