import React,{Component} from 'react';
import {Link} from 'react-router';
class ContentBanner extends Component{
	render(){
		return(
			<section className="sliderWrap clearfix">
				<Link to="content">
					<img src="/src/assets/img/s01.jpg" width="100%"/>
				</Link>
			</section>
			)
	}
};
export default ContentBanner;