import React from 'react';


 let MonthName = (props) =>
       <h5>
       	<span onClick={props.prev} className={props.leftClick || 'leftArrow'}></span>
       	{props.monthName}
       	<span onClick={props.next} className={props.rightClick || 'rightArrow'}></span>
       </h5>

       export default MonthName;			