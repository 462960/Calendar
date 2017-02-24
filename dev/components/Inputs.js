import React from 'react';


export default (props) => 
<div>
 <input 
 className="position" 
 onChange={props.movePosition} 
 type="range" min="20" max="80"/>
 <input 
 className="today_color" 
 onChange={props.colorChange} 
 type="color" 
 defaultValue={props.default}/>

</div>