import React,{Component} from 'react';
import {Link} from 'react-router';
class HotContent extends Component{
	render(){

		return(
			<section className="mContent">
					<div className="tab">
							<a href="javascript:void(0);" className="current">
									<i></i>热门游戏
							</a>
							<a href="javascript:void(0);">最近浏览</a>
					</div>
					<div>
							<ul className="tlist column2 showOne pusht">
								<li><Link to="buylist">忘仙</Link></li>
								<li><Link to="buylist">神魔</Link></li>
								<li><Link to="buylist">仙变</Link></li>
								<li><Link to="buylist">时空猎人</Link></li>
								<li><Link to="buylist">魔与道 </Link></li>
								<li><Link to="buylist">九州OL</Link></li>
								<li><Link to="buylist">世界OL</Link></li>
								<li><Link to="buylist">诛神OL</Link></li>
							</ul>
							<ul className="tlist historyList pusht">
							</ul>
					</div>
					<p className="aBlue pusht tright clearfix" id="clearfixid">
			
							<Link to="buylist">更多手机游戏&gt;&gt;</Link>
					</p>
			</section>
			)
	}
};
export default HotContent;