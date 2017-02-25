import React from 'react';
import moment from 'moment';
import Week from './Week';



let WeeksContainer = function(props){		
    let weeks = [];
    let done = false;
    let date = props.month.clone().startOf("month").startOf('isoweek');
    let count = 0;
    let monthIndex = date.month();

    while (!done) {
      weeks.push(
        <Week 
          key={date} 
          date={date.clone()} 
          month={props.month} 
          />
      );

      date.add(1, "w");
      
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
     
    }
return (
 <div>{weeks}</div>
	)
};

export default WeeksContainer;