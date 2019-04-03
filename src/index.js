import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
//props= properties in the function when it is bein used
function BoxPeople(props){
return ( <div class="girls">
  <h1>{props.name} </h1>
  <p> Age:{props.age}</p>
</div>);
}

let people= <div>
  <BoxPeople name="Mari" age="29"/>
  <BoxPeople  name= "Anne"  age="25"/>
  <BoxPeople name= "Kati" age="45"/>
</div>
// The ReactDOM.render  is a function, that acsepts 2 arguments.
// the variable and its destination
ReactDOM.render(people,document.getElementById('root'));
