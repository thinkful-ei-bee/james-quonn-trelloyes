import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  // Create a DOM element to render the component into
  const div = document.createElement("div");

  // Render the component
  // If something is wrong it will fail her
  ReactDOM.render(<Card ></Card>, div);
  // Clean up
  ReactDOM.unmountComponentAtNode(div);
});

// describe("<Card />", () => {
//   it("renders div with a p, button, p and h3 nested inside", () => {
//     // Render the component, as JSON
//     const tree = renderer.create(<Card ><p></p></Card>).toJSON();
//     // Check whether it matches the previous snapshot
//     // Stored in __snapshots__/App.test.js.snap
//     expect(tree).toMatchSnapshot();
//   });
// });
