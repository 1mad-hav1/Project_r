import './App.css';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Sign from './component/Sign';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Sign' element={<Sign/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>

    </div>
  );
}

export default App;
