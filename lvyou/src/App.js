import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router,Route,Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
            <input type='text' placeholder='请输入您心仪的景区'/>
        </div>
         <div className='out'>
             <Link to='/jingqu'>景区</Link>
             <Link to='/find'>发现</Link>
             <Link to='/my'>我的</Link>
         </div> 
         {this.props.children}
      </div>
    );
  }
}

export default App;
