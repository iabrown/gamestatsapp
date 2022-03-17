import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import {Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Error from './components/Error';
// import BirthdayReminder from './BirthdayReminder';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
        <Route path='error' element={<Error />} />
      </Routes>


{/*Home page component is here */}
  {/*<BirthdayReminder />*/}



    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>

    </div>

  );
}

export default App;
// export default App;
