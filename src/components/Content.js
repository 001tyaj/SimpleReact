import React,{Component} from 'react';
import ContentBanner from './ContentBanner';
import ContentEntrance from './ContentEntrance';
import Search from './Search';
import LeadList from './LeadList';
import TopHead from './TopHead';

class Content extends Component{
	render(){
		return(
			<div>
				<TopHead/>
				<ContentBanner/>
				<div className="fill">
								<ContentEntrance/>
								<section className="searchWrap clearfix">
									<Search/>		
									<LeadList/>	
								</section>
				</div>
			</div>
			
			)
	}
};
export default Content;