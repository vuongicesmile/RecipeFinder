import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/common/NavBar';
import { Home } from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Receipe from './pages/Receipe';

function App() {
  return (
  
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/receipes' element={<Receipe />}></Route>
        </Routes>
      </Router>

  );
}

export default App;
