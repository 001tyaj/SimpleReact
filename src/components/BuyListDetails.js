import React,{Component} from 'react';
import {Link} from 'react-router';
import pubsub from 'pubsub-js'
class BuyListDetails extends Component{
	constructor(){
		super()
		this.state={
			listData:[]
		};
		this.bMounted=true;
		this.getDate=this.getDate.bind(this);
	}
	componentDidMount(){
		this.getDate()
	}
	componentWillUnmount(){
		this.bMounted=false;
	}
	getDate(){
		pubsub.publish('CTL_LOADING',true)
		let url="http://localhost:8001/src/data/buylist.json";
		fetch(url).then((res)=>{
			res.json().then((data)=>{
				console.log(data)
				setTimeout(()=>{
					pubsub.publish('CTL_LOADING',false)
					if (!this.bMounted) return;
					this.setState({
					listData:data
				})
			 },1000)
				
			})
		}).catch(()=>{
			console.log('buylistdetails connect error')
		})
	}
	render(){
		let {listData}=this.state;
		return(
			<ul className="proList clearfix" id="dataUl">
				{
					listData.map((item,index)=>{
						return(
							<div key={item.id}>
								<li>
								<Link to={"gooddetails/"+item.id}>
									<p className="tt">
										<i className="ico icoJi">寄</i>
										{item.price}
									</p>
								</Link>
								<Link to={"gooddetails/"+item.id}>
									<p><ins className="sbtn right">购买</ins></p>
								</Link>
								<Link to={"gooddetails/"+item.id}>
									<p><span className="price">{item.trueprice}</span><br/>{item.area}</p>
								</Link>
							</li>
							<div id="dataappend"></div>
							</div>

							)
					})
				}
				
					
							
				
				
				
		  </ul>
			)
	}
};
export default BuyListDetails;