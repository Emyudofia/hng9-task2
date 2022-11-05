import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';

const App = () =>  {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;