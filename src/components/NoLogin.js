import React,{Component} from 'react';
import {Link} from 'react-router';
class NoLogin extends Component{
	render(){

		return(
			
					<li className="noLogin">
							<Link to="login" className="right">忘记密码</Link><Link to="reg">用户注册</Link>
						</li>
	
			)
	}
};
export default NoLogin;