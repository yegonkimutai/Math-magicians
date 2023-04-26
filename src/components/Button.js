import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ symbol, color }) => (
  <div className="button" style={{ backgroundColor: color }}>{symbol}</div>
);

Button.propTypes = {
  symbol: PropTypes.symbol.isRequired,
  color: PropTypes.symbol.isRequired,
};

export default Button;
