import React from 'react';
import WeekDays from './WeekDays';
import MonthName from './MonthName';
import WeeksContainer from './WeeksContainer';
import Clock from './Clock';
import moment from 'moment';



export let  Calendar = React.createClass({
	getInitialState(){
		return {
		month: moment().locale('uk'),
		leftClick: false,
		rightClick: false,
		position: 30,
		today_color: "#E5D380"
	};
	},
	componentDidMount(){
		setInterval(()=>{
			this.setState({
			time: moment().locale('uk').format('LTS')	
			})
		},1000);
	},
	prevMonth(){
		document.querySelector('audio').play();
		this.setState({
      leftClick: true
    });
		setTimeout(() => {
			this.setState({
				month: this.state.month.subtract(1, 'month'),
				leftClick: false
			})}, 250);
	},
	nextMonth(){
		document.querySelector('audio').play();
		this.setState({
      rightClick: true
    });
		setTimeout(() => {
			this.setState({
				month: this.state.month.add(1, 'month'),
				rightClick: false
			})}, 250);
	},
	 movePosition(e){
		document.querySelector('html').style.setProperty('--main_margin', this.state.position + '%');
		this.setState({
			position: e.target.value
		})
	 },
	 colorChange(e){
	 	this.setState({
	 		today_color: e.target.value
	 	}, () => document.querySelector('html').style.setProperty('--today_color', this.state.today_color));
	 	
	 },
	render(){
		return (
       <div className="wrapper">
       	<main>
       	<Clock time={this.state.time}/>
       	<MonthName 
       	monthName={this.state.month.format("MMMM YYYY")} 
       	prev={this.prevMonth} 
       	next={this.nextMonth}
       	leftClick={this.state.leftClick}
       	rightClick={this.state.rightClick}/>
       	<WeekDays/>
       	<WeeksContainer month={this.state.month}/>
       	<a className="github" target="_blank" href="https://github.com/462960/Calendar">GitHub</a>
       	
       	</main>
       	
       	<input className="position" onChange={this.movePosition} type="range" min="20" max="80"/>
       	<input className="today_color" onChange={this.colorChange} type="color" defaultValue={this.state.today_color}/>
       </div>
			)
	}
})   