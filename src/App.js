import React from 'react';
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import InputBox from './components/InputBox';
import { useDispatch, useSelector } from 'react-redux'
import { numberClick, clear, operatorClick, evaluate } from './actions/action';


function App() {

  const input = useSelector(state=>state.input);
  const dispatch = useDispatch();

  const addToInput = val => dispatch(numberClick(val));
  
  //Add Zero to input only if Input is not empty
  const addZeroToInput = val => {
    if(input!==''){
      dispatch(numberClick(val))
    }
  }

  //Add decimal to number only if there is no decimal before that
  const addDecimal = val => {
    if(input.indexOf('.')===-1){
      dispatch(numberClick(val))
    }
  }

  const clearInput = _ => dispatch(clear());

  const add = val => dispatch(operatorClick(val))
  const substract = val => dispatch(operatorClick(val))
  const multiply = val => dispatch(operatorClick(val))
  const divide = val => dispatch(operatorClick(val))

  const evaluateExp = val => dispatch(evaluate(val));

  return (
    <div className="App">
      <div className="wrapper">
        <div className="row">
          <InputBox>{input}</InputBox>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={substract}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addDecimal}>.</Button>
          <Button handleClick={addZeroToInput}>0</Button>
          <Button handleClick={evaluateExp}>=</Button>
          <Button handleClick={add}>+</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
