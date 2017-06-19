import React from 'react';
import ReactDom from 'react-dom';
import App from './components/APP';
import RouterConfig from './routerConfig';

ReactDom.render(
	<RouterConfig/>,
	document.querySelector('#app')
	)