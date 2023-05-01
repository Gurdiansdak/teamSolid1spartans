import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import OfflineSEO from './pages/OfflinePage/OfflineSEOPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/offlineSEO' element={<OfflineSEO/>}/>
      </Routes>
    </div>
  );
}

export default App;
