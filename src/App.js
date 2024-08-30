import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import GrammarCourse from './pages/GrammarCourse.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grammar" element={<GrammarCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
