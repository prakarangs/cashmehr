import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// Components
import App from './components/App';
import Inventory from './components/Inventory';
import Item from './components/Item';
import Casher from './components/Casher';

const router = (
	<BrowserRouter>
		<Route path='/' component={App}/>
		<Route path='/inventory' component={Inventory}/>
		<Route path='/inventory/:itemId' component={Item}/>
		<Route path='/casher' component={Casher}/>
	</BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
