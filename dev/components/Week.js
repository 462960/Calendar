import React from 'react';
import moment from 'moment';
import Day from './Day';


let Week = function(props) {
    let days = [];
    let {
      date,
      month
    } = props;
    
// Seven days of week looping --------------------
        for (var i = 0; i < 7; i++) {
      let day = {
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), "day"),
      };

       date = date.clone().add(1, "day");
           
      days.push(
        <Day day={day}
              key={date}
          />
      );

     }
//--------------------------------------------------
    return (
      <ul className="days_container">
        {days}
      </ul>
    );

}

export default Week;