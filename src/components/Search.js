import React,{Component} from 'react';
import {Link} from 'react-router';
class Search extends Component{
	render(){

		return(
			<div className="search">
				<input type="text"  id="txt_search_simple" placeholder="查询您要充值的手游"  onFocus="this.value=''" onBlur="if(!value){value=defaultValue;}" className="input"/>
				<Link to="content" className="searchbtn"  id="hlk_search_simple">搜</Link>
			</div>
			)
	}
};
export default Search;