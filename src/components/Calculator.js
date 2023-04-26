import './Calculator.css';

const Input = () => (
  <div className="calc-wrapper">
    <div className="input-wrapper">
      <h3 className="text">0</h3>
    </div>
    <div className="btn-row">
      <button type="button" className="button">AC</button>
      <button type="button" className="button">+/-</button>
      <button type="button" className="button">%</button>
      <button style={{ background: 'darkorange' }} type="button" className="button">/</button>
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button style={{ background: 'darkorange' }} type="button" className="button">x</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button style={{ background: 'darkorange' }} type="button" className="button">-</button>
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button style={{ background: 'darkorange' }} type="button" className="button">+</button>
      <div className="big-grid">
        <button type="button" className="button">0</button>
      </div>
      <button type="button" className="button">.</button>
      <button style={{ background: 'darkorange' }} type="button" className="button">=</button>
    </div>
  </div>

);

export default Input;
