import React,{Component} from 'react';
import Sort from './Sort';
import Screening from './Screening';
import BuyListDetails from './BuyListDetails';
import Upload from './Upload';

class BuyList extends Component{
		componentDidMount(){
				// 判断是否登录
			var username1 = '';
			if(username1 != ''){//已经登录
			 $('.Mfoot .nav').empty();
			 var divuserText = '<a href="personal.html">'+username1+'</a><em>|</em><a href="logout.action" className="blue">退出</a><em>|</em>'
			     +'<a href="javascript:window.scrollTo(0,0);">返回顶部</a>';
			 $('.Mfoot .nav').html(divuserText);
			}
		}
	render(){

		return(
				<form id="goodsForm" action="/procurement/procurement.action" method="post">
						<section className="mContent">
							<Screening/>
							<Sort/>
							<BuyListDetails/>
							<Upload/>
						</section>
			  </form>
			)
	}
};
export default BuyList;