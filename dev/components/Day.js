import React from 'react';

let Day = function(props) {
      const {
        isCurrentMonth,
        isToday,
         number
     } = props.day;

    return (
      <li className={(isToday && "today ") + (isCurrentMonth || " diff_month")}>
      {number}
      </li>
    );
}

export default Day;