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
	render(){
		return (
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
       <a className="github" href="https://github.com/462960/Calendar">GitHub</a>
       </main>
			)
	}
})   