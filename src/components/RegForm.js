import React,{Component} from 'react';
class RegForm extends Component{
	render(){

		return(
			<div className="regform">
					<li>
								<input type="text" className="input" placeholder="请输入你的手机号码：" id="tel" name="user.tel"/>
							</li>
							<li>
								<input type="password" className="input"
									placeholder="密   码：（6-12位英文或数字） " id="userPassword" name="user.userPassword"/>
							</li>
							<li>
								<input type="password" className="input" placeholder="确认密码：" id="userPassword_"  maxLength="20"/>
							</li>
							<li>
								<input type="text" className="input input70" placeholder="请输入手机验证码" id="validcode" size="8" maxLength="4"/>
								<ins className="action vCode" id="btnSend">
									发送验证码
								</ins>
							</li>	
		</div>
			)
	}
};
export default RegForm;