import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <>
    <p>{props.part1} {props.exercise1}</p>
    <p>{props.part2} {props.exercise2}</p>
    <p>{props.part3} {props.exercise3}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <div>
    <p>Number of Exercises: {props.exercise1 + props.exercise2 + props.exercise3}.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack development Course';
  const part1 = 'Fundamentals of React and Javacsript Programming';
  const exercise1 = 10;
  const part2 = 'Using props to pass the data';
  const exercise2 = 7;
  const part3 = 'State of the Component';
  const exercise3 = 14;
  
  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercise1 = {exercise1} exercise2 ={exercise2} exercise3 = {exercise3} />
      <Total exercise1 = {exercise1} exercise2 ={exercise2} exercise3 = {exercise3}/>
     </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

