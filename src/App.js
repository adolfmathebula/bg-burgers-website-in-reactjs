import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Login from './pages/Login'
import Specials from './pages/Specials'
import Footer from './components/Footer'
import NoPage from './pages/NoPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/specials' element={<Specials/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/nopage' element={<NoPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
