import './App.css';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Sign from './component/Sign';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Sign' element={<Sign/>}/>
      </Routes>

    </div>
  );
}

export default App;
