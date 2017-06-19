import React,{Component} from 'react';
import {Link} from 'react-router';
class CommonFoot extends Component{
	render(){
		return(
			<footer className="Mfoot">
			<Link to="login">登录</Link>
					<p className="nav">
						<Link to="login">登录</Link><em>|</em><Link to="reg">注册</Link><em>|</em>
						<a href="javascript:window.scrollTo(0,0);">返回顶部</a>
					</p>
					<p className="cp">
						<Link to="content">电脑版</Link>
					</p>
					<p className="copyright">
						&copy;2014 m.7881.com
					</p>
			</footer>
			)
	}
};
export default CommonFoot;