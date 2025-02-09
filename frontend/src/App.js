import { Route, Routes } from 'react-router-dom';
import './styles/app.css';

//rutas
import Home from './pages/Temp.jsx';
import Header from './components/Header.jsx';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
