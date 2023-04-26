import React, { useState } from 'react';

import './Calculator.css';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

const Input = () => {
    const [calcData, setCalcData] = useState({
        total: null,
        next: null,
        operation: null,
    })

    const valueButton = (buttonName) => {
        const newInput = calculate(calcData, buttonName);
        setCalcData(newInput)
    }

    const initialValue = calcData.next || calcData.total || '0';

  return(
  <div className="calc-wrapper">
      <input type='number' value={initialValue} className="input-wrapper"/>
    <div className="btn-row">
      <button type="button" onClick={() => valueButton('AC')} className="button">AC</button>
      <button type="button" onClick={() => valueButton('+/-')} className="button">+/-</button>
      <button type="button" onClick={() => valueButton('%')} className="button">%</button>
      <button style={{ background: 'darkorange' }} type="button" onClick={() => valueButton('÷')} className="button">÷</button>
      <button type="button" onClick={() => valueButton('7')} className="button">7</button>
      <button type="button" onClick={() => valueButton('8')} className="button">8</button>
      <button type="button" onClick={() => valueButton('9')} className="button">9</button>
      <button style={{ background: 'darkorange' }} type="button" onClick={() => valueButton('x')} className="button">x</button>
      <button type="button" onClick={() => valueButton('4')} className="button">4</button>
      <button type="button" onClick={() => valueButton('5')} className="button">5</button>
      <button type="button" onClick={() => valueButton('6')} className="button">6</button>
      <button style={{ background: 'darkorange' }} type="button" onClick={() => valueButton('-')} className="button">-</button>
      <button type="button" onClick={() => valueButton('1')} className="button">1</button>
      <button type="button" onClick={() => valueButton('2')} className="button">2</button>
      <button type="button" onClick={() => valueButton('3')} className="button">3</button>
      <button style={{ background: 'darkorange' }} type="button" onClick={() => valueButton('+')} className="button">+</button>
      <div className="big-grid">
        <button type="button" onClick={() => valueButton('0')} className="button">0</button>
      </div>
      <button type="button" onClick={() => valueButton('.')} className="button">.</button>
      <button style={{ background: 'darkorange' }} type="button" onClick={() => valueButton('=')} className="button">=</button>
    </div>
  </div>

);
}

export default Input;
