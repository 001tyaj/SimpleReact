import React,{Component} from 'react';
import TopHead from './TopHead';
import Content from './Content';
import CommonFoot from './CommonFoot';
import HotGame from './HotGame';
import BuyList from './BuyList';
import CommonHead from './CommonHead';
import GoodDetails from './GoodDetails';
import Login from './Login';
import Reg from './Reg';
import Error from './Error';
import Loading from './Loading';
import pubsub from 'pubsub-js'
class App extends Component{
	constructor(){
		super();
		this.state={
			bLoading:false
		};
		pubsub.subscribe('CTL_LOADING',(mess,data)=>{
			this.setState({
				bLoading:data
			})
		})
	};
	componentWillUnmount(){
		pubsub.clearSubscriptions('CTL_LOADING')
	};
	render(){
	
		let path=this.props.router.location.pathname
		
		let head=true;
		if(/reg|login|hotgame|gooddetails|buylist/.test(path)){
			head=true
		}else{
			head=false
		}
		return(
			<div className="indexWrap">
					<Loading show={this.state.bLoading}/>
					{head?<CommonHead/>:''}
					{this.props.children}
					<CommonFoot/>		

		</div>
			)
	}
};
export default App;