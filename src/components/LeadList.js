import React,{Component} from 'react';
import {Link} from 'react-router';
class LeadList extends Component{
	render(){

		return(
			<p className="hotwords">
				<Link title="天天酷跑" to="buylist">天天酷跑</Link>
				<Link title="地下城与勇士" to="buylist">地下城与勇士</Link>
				<Link title="忘仙" to="buylist">忘仙</Link>
				<Link title="神魔" to="buylist">神魔</Link>
			</p>
			)
	}
};
export default LeadList;