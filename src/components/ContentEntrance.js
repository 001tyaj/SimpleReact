import React,{Component} from 'react';
import {Link} from 'react-router';
class ContentEntrance extends Component{
	render(){

		return(
			<section className="mSorts clearfix" id="msorts">
					<ul>
						<li className="">
								<Link to="hotgame">
									<img src="/src/assets/img/i01.png" alt="AppStore充值" />
								</Link>
								<Link to="hotgame" className="pt">
									<img src="/src/assets/img/i02.png" alt="手游交易" /> 
								</Link>
							</li>
							<li>
								<Link to="hotgame">
									<img src="/src/assets/img/i05.png" alt="苹果手游直充" />
								</Link>
							</li>
							<li>
								<Link to="login"><img src="/src/assets/img/i04.png" alt="个人中心" /> </Link>
								<Link to="buylist" className="pt"><img src="/src/assets/img/i03.png" alt="网游交易" /> </Link>
							</li>
					</ul>
			</section>
			)
	}
};
export default ContentEntrance;