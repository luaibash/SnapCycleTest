import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Demo from './pages/Demo';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {AnimatePresence} from "framer-motion";
import AppLoadAnimation from "./animations/AppLoadAnimation";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Root from "./pages/Root";

function App() {
    return (
        <div className='App'>
            <AppLoadAnimation/>
            <AnimatePresence mode='wait'>
                <Router basename="/">
                    <Navbar/>
                        <Routes>
                            <Route exact_path="/" element={<Root/>}/>
                            <Route path='/home' element={<Home/>} />
                            <Route path='/team' element={<Team/>} />
                            <Route path='/demo' element={<Demo/>} />
                            <Route path='/help' element={<Help/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                        </Routes>
                    <Footer/>
                </Router>
            </AnimatePresence>
        </div>
    );
}
  
export default App;
