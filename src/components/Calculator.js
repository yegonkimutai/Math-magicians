import './Calculator.css';
import PropTypes from 'prop-types';

const Input = ({ text, result }) => (
  <div className="input-wrapper">
    <div className="result">
      <h1>{result}</h1>
    </div>
    <div className="text">
      <h3>{text}</h3>
    </div>
  </div>
);

Input.propTypes = {
  text: PropTypes.number.isRequired,
  result: PropTypes.number.isRequired,
};

export default Input;
