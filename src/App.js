import './App.css';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Work from './components/Work';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes >
        <Route path='/' element={<Work />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
