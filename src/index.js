import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props);
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
  const parts = [
    {
      name: 'Fundamentals of React and Javacsript Programming',
      exercises: 10,
    },
    {
      name:'Using props to pass the data',
      exercises: 7,
    },
    {
      name: 'State of the Component',
      exercises: 14,
    }
  ]  
  return (
    <>
      <Header course={course} />
      <Content part1 = {parts[0].name} part2 = {parts[1].name} part3 = {parts[2].name} exercise1 = {parts[0].exercises} exercise2 ={parts[1].exercises} exercise3 = {parts[2].exercises} />
      <Total exercise1 = {parts[0].exercises} exercise2 ={parts[1].exercises} exercise3 = {parts[2].exercises}/>
     </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

