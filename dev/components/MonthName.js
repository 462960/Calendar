import React from 'react';


 export default (props) =>
       <h5>
       	<span onClick={props.prev} className={props.leftClick || 'leftArrow'}></span>
       	{props.monthName}
       	<span onClick={props.next} className={props.rightClick || 'rightArrow'}></span>
       </h5>			