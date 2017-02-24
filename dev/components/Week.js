import React from 'react';
import moment from 'moment';
import Day from './Day';


export default function(props) {
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

     //   for (let [i, cut] of date.entries()) {
     //    if(i == 6){
     //      continue;
     //    }
     //  let day = {
     //      number: date.date(),
     //      isCurrentMonth: date.month() === month.month(),
     //      isToday: date.isSame(new Date(), "day"),
     //  };

     //   date = date.clone().add(1, "day");
     //   let weekSet = <Day day={day} key={date} />
           
     //  days.push(weekSet);

     // }

      // days.push(date.clone().add(1, "day").slice(0,8).map(date =>
      //  <Day day={day}
      //         key={date}
      //     /> ))
//--------------------------------------------------
    return (
      <ul className="days_container">
        {days}
      </ul>
    );

}