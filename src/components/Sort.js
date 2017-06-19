import React,{Component} from 'react';
class Sort extends Component{
	render(){

		return(
			<div className="sorted clearfix">
					<ul className="tlist">
						<li>价格从低到高<i id="priceasc" className="asc ascGray"></i></li>
						<li>价格从高到低<i id="pricedesc" className="desc descGray"></i></li>
					</ul>
			</div>
			)
	}
};
export default Sort;