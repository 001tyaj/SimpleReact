import React,{Component} from 'react';
import LoginForm from './LoginForm';
import LoginBtn from './LoginBtn';
import NoLogin from './NoLogin';

class Login extends Component{
	componentDidMount(){
						if ('true' == 'false') {
					window.location.href = 'default.htm';
				}
				
				if(''!=null && ''!=""){
					alert("");
				}
				
				var ischeck = 0;
				function checkLogin(){
					if (ischeck == 0) {
						ischeck++;
					} else {
						return true;
					}
					var username = $('#username').val();
					var password = $('#password').val();
					
					if(username == ''){
						alert('用户名不能为空！');
						ischeck = 0;
						return false;
					}
					$('#username').val(username.toLowerCase());
					if(password == ''){
						alert('密码不能为空！');
						ischeck = 0;
						return false;
					}
					$('#password_').val(hex_md5(hex_md5($('#password').val()) + $('#random').val()));
					$('#loginForm').attr('action', 'login.action');
					$('#loginForm').submit();
					return false;
				}

				$(document).ready(function() {
					$('#hlkOK').click(function() {
						$.ajax( {
							type : 'post',
							url : 'getRandom.action',
							dataType : 'text',
							success : function(txt) {
								$('#random').val(txt);
								return checkLogin();
							},
							failure : function(txt) {
								alert(txt);
							}
						});
						return false;
					});
				});
			}componentDidMount(){
						if ('true' == 'false') {
					window.location.href = 'default.htm';
				}
				
				if(''!=null && ''!=""){
					alert("");
				}
				
				var ischeck = 0;
				function checkLogin(){
					if (ischeck == 0) {
						ischeck++;
					} else {
						return true;
					}
					var username = $('#username').val();
					var password = $('#password').val();
					
					if(username == ''){
						alert('用户名不能为空！');
						ischeck = 0;
						return false;
					}
					$('#username').val(username.toLowerCase());
					if(password == ''){
						alert('密码不能为空！');
						ischeck = 0;
						return false;
					}
					$('#password_').val(hex_md5(hex_md5($('#password').val()) + $('#random').val()));
					$('#loginForm').attr('action', 'login.action');
					$('#loginForm').submit();
					return false;
				}

				$(document).ready(function() {
					$('#hlkOK').click(function() {
						$.ajax( {
							type : 'post',
							url : 'getRandom.action',
							dataType : 'text',
							success : function(txt) {
								$('#random').val(txt);
								return checkLogin();
							},
							failure : function(txt) {
								alert(txt);
							}
						});
						return false;
					});
				});
			}
	render(){

		
		return(
		
		<section className="mContent">

				<form id="loginForm" method="post">
						<input type="hidden" name="random" id="random"
						value="" />
					<input type="hidden" name="lbbrowser" id="lbbrowser"
						value="webbrowser" />
					<input type="hidden" id="macaddress" name="macaddress" value="" />
					
					<input type="hidden" name="comeback" value="" />
					<ul className="form">
						<LoginForm/>
						<LoginBtn/>
						<NoLogin/>
					</ul>
					
				</form>
		</section>	
		
			)
	}
};
export default Login;