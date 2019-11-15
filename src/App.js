import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // Declare a new state variable, which we'll call "count"
  // This new function useState is a “Hook”
  // React 16.8.0 is the first release to support Hooks.
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Carlos Fábio");
  // The Effect Hook, useEffect, adds the ability to perform side effects.
  // It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount 
  //  in React classes, but unified into a single API.
  // In this example, this component sets the document title after React updates the DOM:
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h2>React Studies</h2>
      <p><button onClick={() => {
        setCount(count + 1)
        setName("João")}} >Click me</button></p>
      <div>{name}, You clicked {count} times</div>
    </div>
  );

}

export default App;
