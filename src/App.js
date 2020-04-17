import React from 'react';
import logo from './assets/react.png';
import javascript from './assets/javascript.png'
import swift from './assets/swift.png'
import c from './assets/c.png'
import auth0 from './assets/auth0.png'
import html from './assets/html.png'
import reactIcon from './assets/react.png'
import redux from './assets/redux.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='ios'/>
      </header>
      <section className='skill-section'>
        <div className='skill-languages'>
          <div>
            <h2>Languages</h2>
          </div>
          <div>
            <img src={javascript} alt='javascript'/>
            <label>JavaScript</label>
          </div>
          <div>
            <img src={swift} alt='swift'/>
            <label>Swift</label>
          </div>
          <div>
            <img src={c} alt='c-sharp'/>
            <label>C#</label>
          </div>
        </div>

        <div className='skill-languages'>
          <div>
            <h2>Front-End</h2>
          </div>
          <div>
            <img src={auth0} alt='auth0'/>
            <label>Auth0</label>
          </div>
          <div>
            <img src={html} alt='html-5'/>
            <label>HTML 5</label>
          </div>
          <div>
            <img src={reactIcon} alt='react'/>
            <label>React</label>
          </div>
          <div>
            <img src={redux} alt='redux'/>
            <label>Redux</label>
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
