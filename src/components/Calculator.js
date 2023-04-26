import './Calculator.css';

const Input = (props) => {
    return(
    <div className="input-wrapper">
        <div className="result">
            <h1>{props.result}</h1>
        </div>
        <div className="text">
            <h3>{props.text}</h3>
        </div>
    </div>)
}

export default Input;