import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Write from './routes/Write';
import MyPage from './routes/MyPage';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie-detail" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
