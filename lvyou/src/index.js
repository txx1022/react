import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router,Route,Link} from 'react-router'
import Jingqu from './jingqu';
import Find from './find';
import My from './my';



ReactDOM.render( 
	<Router >
	  <Route path="/" component={App}>
		  <Route path='/jingqu' component={Jingqu}></Route>
		  <Route path='/find' component={Find}></Route>
		  <Route path='/my' component={My}></Route>
	  </Route>
	 
</Router>, document.getElementById('root'));

registerServiceWorker();
