import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import GrammarCourse from './pages/GrammarCourse.jsx';
import SelfStudyPage from './pages/SelfStudyPage.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './hooks/ScrollToTop.js';
import PracticeAPI from './pages/PracticeAPI.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grammar" element={<GrammarCourse />} />
        <Route path="/self-study" element={<SelfStudyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} />
        <Route path="/api/" element={<PracticeAPI />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
