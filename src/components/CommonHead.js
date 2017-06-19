import React,{Component} from 'react';
import {Link,hashHistory} from 'react-router'
class CommonHead extends Component{
	render(){

		return(
				<header className="topHd">
					
					<a href="javascript:;" onClick={hashHistory.goBack} className="back">返回</a>
					<Link to="content" className="home"> 首页</Link>
					<span>7788手游交易网</span>
			  </header>
			)
	}
};
export default CommonHead;