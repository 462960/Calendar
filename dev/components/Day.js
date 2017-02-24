import React from 'react';

export default function(props) {
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