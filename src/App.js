import './App.css';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Sign from './component/Sign';
import { Switch } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Login/>
      <Switch>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Sign' element={<Sign/>}/>
      </Routes>
      </Switch>
    </div>
  );
}

export default App;
