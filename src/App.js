import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Input from './components/Calculator';
import Api from './components/Api';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="components">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Input />} />
        <Route path="/quotes" element={<Api />} />
      </Routes>
    </div>
  </div>
);

export default App;
