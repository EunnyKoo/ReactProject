import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Write from './routes/Write';
import LogIn from './routes/LogIn';
import Register from './routes/Register';
import MyPage from './routes/MyPage';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sandwich-detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path='/login' element={<LogIn />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
