import React,{Component} from 'react';

class LoginForm extends Component{
	
	render(){

		return(
			<div className="loginform">
				<li>
							<input type="text" className="input" placeholder="用户名：" id="username" name="username"/>
						</li>
						<li>
							<input type="password" className="input" placeholder="密   码：" id="password"/>
							<input type="hidden" className="input" id="password_" name="password"/>
						</li>
			</div>
			)
	}
};
export default LoginForm;