import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import MyPokemon from './pages/MyPokemon';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';

function App() {
  return (
    <Router>
      <TopNavbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/my-pokemon" element={<MyPokemon />} />
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;
