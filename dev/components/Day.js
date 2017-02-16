import React from 'react';

export default function(props) {
     const {
      day: {
        isCurrentMonth,
        isToday,
         number
      },
     } = props;

    return (
      <li className={(isToday && "today ") + (isCurrentMonth || " diff_month")}>
      {number}
      </li>
    );
}