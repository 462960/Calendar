import React from 'react';
import WeekDays from './WeekDays';
import MonthName from './MonthName';
import WeeksContainer from './WeeksContainer';
import Clock from './Clock';
import Watches from './Watches';
import Inputs from './Inputs';
import moment from 'moment';



export let  Calendar = React.createClass({
	getInitialState(){
		return {
		month: moment().locale('uk'),
		leftClick: false,
		rightClick: false,
		position: 30,
		today_color: "#E5D380",
	};
	},
	componentDidMount(){
		setInterval(()=>{
			let timeArray = (moment().locale('uk').format('LTS')).split(':');
			this.setState({
			sec: ((timeArray[2]/60)*360)+90,
			min: (timeArray[1]/60)*360 + 90,
			hour: (360/12)*timeArray[0] + 90 + (360/720)*timeArray[1]	
			}, () => document.querySelector('.sec').style.transform = `rotate(${this.state.sec}deg)`,
			         document.querySelector('.min').style.transform = `rotate(${this.state.min}deg)`,
			         document.querySelector('.hour').style.transform = `rotate(${this.state.hour}deg)`)
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
       	<Watches/>
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
       	<Inputs 
       	movePosition={this.movePosition} 
       	colorChange={this.colorChange}
       	default={this.state.today_color}/>
       </div>
			)
	}
})   