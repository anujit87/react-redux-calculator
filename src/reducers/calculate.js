const initialState = {
    input:'',
    prevNumber:'',
    currentNumber:'',
    operator:''
}

const evaluateExpression = (prevNumber,currentNumber,operator) =>{
    switch(operator){
        case '+':
            return parseFloat(prevNumber)+parseFloat(currentNumber);
        case '-':
            return parseFloat(prevNumber)-parseFloat(currentNumber);
        case '*':
            return parseFloat(prevNumber)*parseFloat(currentNumber);
        case '/':
            return parseFloat(prevNumber)/parseFloat(currentNumber);
        default:
            return 'Math Error'
    }
}

const calculateReducer = (state=initialState,action) => {
    switch(action.type){
        case 'NUMBER_CLICK':
            return {
                ...state,
                input:state.input+action.num
            }
        case 'OPERATOR_CLICK':
            return {
                ...state,
                prevNumber:state.input,
                input:'',
                operator:action.operator
            }
        case 'EVALUATE':
            const input=evaluateExpression(state.prevNumber,state.input,state.operator);
            return {
                ...state,
                currentNumber:state.input,
                input:input.toString()
            }
        case 'CLEAR':
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default calculateReducer;