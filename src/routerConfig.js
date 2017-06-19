import {Router,hashHistory,Route,IndexRoute} from 'react-router';
import React from 'react';
import App from './components/App';
import Content from './components/Content';
import Reg from './components/Reg';
import Login from './components/Login';
import HotGame from './components/HotGame';
import BuyList from './components/BuyList';
import GoodDetails from './components/GoodDetails';
import Error from './components/Error';

const RouterConfig=()=>(
	<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Content}/>
				<Route path="content" component={Content} />
				<Route path="reg" component={Reg} />
				<Route path="login" component={Login} />
				<Route path="hotgame" component={HotGame} />
				<Route path="gooddetails" component={GoodDetails}>
					<Route path=":aid" component={GoodDetails}/>
				</Route>
				<Route path="buylist" component={BuyList} />
				<Route path="*" component={Error}/>

			</Route>
	</Router>
	);
export default RouterConfig;