import React,{Component} from 'react';
import RegForm from './RegForm';

class Reg extends Component{
	componentDidMount(){
		if ($.trim('') != '') {
		alert('');
	}
	
	var timer = 60;
	
	function register_submit() {
		if($('#userPassword').val() == '' || $('#userPassword_').val() == ''){
			alert('密码或确认密码不能为空');
			return false;
		}else if($('#userPassword').val() != $('#userPassword_').val()){
			alert('密码和确认密码不一致');
			return false;
		}
		if ($('#userid').val() == '' || $('#validcode').val() != $('#code').val()) {
			alert('手机验证码无效');
			return false;
		}
		$('#registerForm').submit();
	}
	
	function validateMobile(){
		var tel = $('#tel').val();
		var partten=/^(?:\+86)?(?:13\d|15\d|18\d)\d{8}$/;
		if ($.trim(tel) == '') {
			alert('请输入手机号');
			return false;
		}
		if(!tel.match(partten)){
			alert('请正确输入手机号');
			return false;
		}
		//$('#btnSend').attr('disabled', true);
		//$('#btnSend').html('正在校验手机号，请稍候...');
		$.ajax({
			type : 'post',
			url: 'user/examineUserTel.action@random='+Math.random()*1000,
			data : {
				tel : $('#tel').val()
			},
			dataType : 'json',
			success : function(data){
				//$('#btnSend').removeAttr('disabled');
				//$('#btnSend').html('发送验证码');
				//alert(data);
				if(data == '1') {//已经注册
					alert('该手机号已被注册，请输入其他手机号');
					return false;
				}else if(data == '0'){
					codeSend();
				}
				return false;
			},
			failure : function(json) {
				alert(json);
				return false;
			}
		});
	}
	
	function codeSend(){
		$('#btnSend').attr('disabled', true);
			var interval = setInterval(function(){
				$('#btnSend').html(timer + '秒后重新发送');
				timer--;
				if (timer == 0) {
					$('#btnSend').removeAttr('disabled');
					$('#btnSend').html('发送验证码');
					clearInterval(interval);
					timer = 60;
				}
			}, 1000);
			$.ajax({
				type : 'post',
				url : 'commerical/sendPhoneValid.action',
				data : {
					tel : $('#tel').val()
				},
				dataType : 'json',
				success : function(json){
					if (json.success == 'T'){
						$('#userid').val(json.userid);
						$('#code').val(json.code);
					}
					return false;
				},
				failure : function(json){
					alert(json);
					return false;
				}
		});
	}
	
	$(document).ready(function(){
	
		$('#hlkOK').click(function(){
			register_submit();
		});
		
		restrict_digit_input($('#tel'));
		
		$('#btnSend').click(function() {
			validateMobile();
		});
	});
	}
	render(){

		return(
			<form id="registerForm" method="post" action="/user/doRegister.action">
			<input type="hidden" id="userid" name="user.userid" />
			<input type="hidden" id="code" />
				<section className="mContent">
						<ul className="form">
							<RegForm/>
							<li className="btnArea">
								<input type="button" className="btn" id="hlkOK" value="注&nbsp;&nbsp;册" />
							</li>
						</ul>
				</section>
			</form>
			)
	}
};
export default Reg;