import "./Button.css";

const Button =({ symbol, color }) => {
    return(
        <div className="button" style={{backgroundColor: color}}>{symbol}</div>
    )
}


export default Button