import logo from './logo.svg';
import './App.css';
import React from 'react';
import myVideo from './assets/proje_resimler/background.mp4'; // Doğru dosya yolu
import './screens/enterance.css'; 



function App() {
  return (
    <Startpage />
  );
}
function Startpage(){
  return (
    <>
    <div className='background-container'>
      <video autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>

    <div className='sign-inButton'>
        <button>Sign in </button>
    </div>
    <div className='sign-upButton'>
        <button>Sign up </button>
    </div>
    <div className='startLabel'>
        <label>LET'S START</label>
    </div>

    </>
  );
}


export default App;
