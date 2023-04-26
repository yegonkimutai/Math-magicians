import { useState } from 'react';

import './App.css';
import Button from './components/Button.js'
import Input from './components/Calculator.js'

const App = () => {
  const [text, setText]  = useState(0)
  const [result, setResult]  = useState("")

  const btnColor = 'darkorange';

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className="btn-row">
        <Button symbol = 'AC'/>
        <Button symbol = '+/-'/>
        <Button symbol = '%'/>
        <Button symbol = '/' color={btnColor}/>
        </div>
        <div className="btn-row">
        <Button symbol = '7'/>
        <Button symbol = '8'/>
        <Button symbol = '9'/>
        <Button symbol = '*' color={btnColor}/>
        </div>
        <div className="btn-row">
        <Button symbol = '4'/>
        <Button symbol = '5'/>
        <Button symbol = '6'/>
        <Button symbol = '-' color={btnColor}/>
        </div>
        <div className="btn-row">
        <Button symbol = '1'/>
        <Button symbol = '2'/>
        <Button symbol = '3'/>
        <Button symbol = '+' color={btnColor}/>
        </div>
        <div className="btn-row">
          <div className="big-grid">
          <Button symbol = '0'/>
          </div>
        <Button symbol = '.'/>
        <Button symbol = '=' color={btnColor}/>
        </div>
      </div>
    </div>
  );
}

export default App;
