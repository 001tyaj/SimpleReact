import React,{Component} from 'react';
import {Link} from 'react-router';
class TopHead extends Component{
	render(){
		return(
			<header className="mainHd">
							<nav className="mNav">
							<Link to="login">注册</Link><Link to="reg">登录</Link>
							</nav>
							<h1>
								<Link to="content" className="logo">7881-做最专业的游戏交易平台</Link>
							</h1>
			</header>
			)
	}
};
export default TopHead;