import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import myVideo from './assets/proje_resimler/background.mp4'; // Doğru dosya yolu
import SignIn from "./screens/SignIn.js";  // SignIn bileşenini doğru şekilde içe aktar 
import './screens/sign-in.css';
import './screens/sign-up.css';
import './App.css';
import './screens/enterance.css'; 
import SignUp from './screens/SignUp.js';

// Home Bileşeni
function Home() {
  return (
    <div>
      <Startpage />
    </div>
  );
}

// Startpage Bileşeni
function Startpage() {
  const navigate = useNavigate();  // useNavigate kullanımı

  return (
    <>
      <div className='background-container'>
        <video autoPlay loop muted>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>

      <div className='sign-inButton'>
        {/* Sign in butonuna tıklanınca /sign-in sayfasına yönlendirilir */}
        <button onClick={() => navigate("/sign-in")}>Sign in</button>
      </div>

      <div className='sign-upButton'>
        {/* Sign up butonuna tıklama işlemi eklenebilir */}
        <button onClick={() => navigate("/sign-up")}>Sign up</button>
      </div>

      <div className='startLabel'>
        <label>LET'S START</label>
      </div>
    </>
  );
}

// App Bileşeni (Ana uygulama bileşeni)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;