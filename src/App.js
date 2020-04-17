import React from 'react';
import logo from './assets/react.png';
import javascript from './assets/javascript.png'
import swift from './assets/swift.png'
import c from './assets/c.png'
import auth0 from './assets/auth0.png'
import html from './assets/html.png'
import reactIcon from './assets/react.png'
import redux from './assets/redux.png'
import apple from './assets/apple.png'
import git from './assets/git.png'
import ios from './assets/ios.png'
import node from './assets/node_js.png'
import nodemailer from './assets/nodemailer.png'
import stripe from './assets/stripe.png'
import sass from './assets/sass.png'
import gitHub from './assets/github.png'
import window from './assets/windows.png'
import postgresql from './assets/postgresql.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt='ios'/> */}
      </header>
      <seciton className='intro'>
        <h1>Nicholas K. Hunsaker</h1>
      </seciton>
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

        <div className='skill-languages-others'>
          <div>
            <h2>Others</h2>
          </div>
          <div className='flex-h'>
          <div>
            <img src={apple} alt='auth0'/>
            <label>Mac</label>
          </div>
          <div>
            <img src={window} alt='react'/>
            <label>Window</label>
          </div>
          <div>
            <img src={ios} alt='html-5'/>
            <label>iOS</label>
          </div>
          <div>
            <img src={node} alt='react'/>
            <label>NodeJS</label>
          </div>
          <div>
            <img src={postgresql} alt='react'/>
            <label>PostgreSQL</label>
          </div>
          <div>
            <div className="git-hub-background">
              <img className="git-hub-img" src={gitHub} alt='react'/>
            </div>
            <label>GitHub</label>
          </div>
          <div>
            <img src={git} alt='react'/>
            <label>Git</label>
          </div>
          <div>
            <img src={nodemailer} alt='redux' style={{backgroundColor: 'white', padding:'0 4px'}}/>
            <label>Nodemailer</label>
          </div>
          <div>
            <img src={stripe} alt='react'/>
            <label>Stripe</label>
          </div>
          <div>
            <img src={sass} alt='react'/>
            <label>Sass</label>
          </div>
        </div>
        </div>

      </section>
    </div>
  );
}

export default App;
