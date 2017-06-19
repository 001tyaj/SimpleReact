import React,{Component} from 'react';
import BuyBtn from './BuyBtn';
import {hashHistory} from 'react-router';
import pubsub from 'pubsub-js'
class GoodDetails extends Component{
	constructor(){
		super();
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
		let url="http://localhost:8001/src/data/gooddeetails.json"
		fetch(url).then((res)=>{
			res.json().then((data)=>{
				console.log(data)
				setTimeout(()=>{
					pubsub.publish('CTL_LOADING',false)
					if (!this.bMounted) return;
					this.setState({
					listData:data
				});
				},500)
				
			});
		}).catch(()=>{
			console.log('gooddetails connect error')
		})
	}
	render(){
		let {listData}=this.state;
		let now=this.props.params.aid-1;
		let item=this.state.listData[now];
		return(
		<section className="mContent">
				<article className="cttBg">
					<ul className="form">
								<li>
								<i className="ico icoJi">寄</i>
									<span className="blue">{item?item.number:''}</span>
								</li>
								<li>游戏名称：{item?item.name:''}</li>
								<li>游戏区服：{item?item.area:''}</li>
								<li>游戏类型：{item?item.type:''}</li>
								<li>单件数	量：{item?item.number:''}</li>
								<li>商品单价：{item?item.price:''}</li>
								<li>商品库存：{item?item.inventory:''} </li>
								<li><span className="ftBig orange">¥100</span>
								<a href="javascript:;" onClick={hashHistory.goBack} className="aBlue right">返回列表页</a></li>
					</ul>
			 </article>
				<BuyBtn/>
		</section>
			)
	}
};
export default GoodDetails;