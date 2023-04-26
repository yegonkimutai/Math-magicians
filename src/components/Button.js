import './Button.css';

const Button =(props) => {
    return(
        <div className="button" style={{backgroundColor: props.color}}>{props.symbol}</div>
    )
}


export default Button