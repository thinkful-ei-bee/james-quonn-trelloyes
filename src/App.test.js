import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it("renders without crashing", () => {
    // Create a DOM element to render the component into
    const div = document.createElement("div");
  
    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(<App />, div);
    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a main element with a header and div nested inside", ()=>{
    const div = document.createElement("div");
  
  })