import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Projects from '../Projects/Projects.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
