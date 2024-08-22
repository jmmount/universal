import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="signup/" component={SignUp} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
