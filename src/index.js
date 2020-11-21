import React from 'react';
import ReactDOM from 'react-dom';


//Header
const Header = (props) => {
  console.log(props);
  return(
    <h1>{props.course}</h1>
  )
}
//Content
const Content = (props) => {
  const parts = props.parts;
  console.log(parts);
  return(
    <>
    <p>{parts[0].name} {parts[0].exercises}</p>
    <p>{parts[1].name} {parts[1].exercises}</p>
    <p>{parts[2].name} {parts[2].exercises}</p>
    </>
  )
}


//total

const Total = (props) => {
  const parts = props.parts;
  return(
    <div>
    <p>Number of Exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}.</p>
    </div>
  )
}

//App
const App = () => {
  const course = {
    name: 'Half Stack development Course',
    parts: [
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
}
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts}/>
     </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

