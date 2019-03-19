import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  // Create a DOM element to render the component into
  const div = document.createElement("div");

  // Render the component
  // If something is wrong it will fail here
  ReactDOM.render(
    <List
      header="header string"
      cards={[{ key: 2, title: "my title", content: "my content" }]}
    />,
    div
  );
  // Clean up
  ReactDOM.unmountComponentAtNode(div);
});

describe("<List />", () => {
  it("renders without crashing", () => {
    // Render the component, as JSON
    const tree = renderer
      .create(
        <List
          header="header string"
          cards={[{ key: 2, title: "my title", content: "my content" }]}
        />
      )
      .toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot();
  });
});
