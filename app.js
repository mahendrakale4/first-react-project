import React from "react";
import ReactDOM from "react-dom/client";

// ! <h1 idea="tag"> "this is my first line in react  code" </h1>
// const heading1 = React.createElement("h1",{id: "title",},"this is my first line in react  code");
// const heading2 = React.createElement("h2", { id: "title" }, "this is 2nd line");

const container = React.createElement("div", { id: "container" }, [
  // <--- this is array
  //array 1
  React.createElement(
    "h1",
    { id: "title", key: "h111" },
    "this is my first line in react  code"
  ),
  //array 2
  React.createElement("ul", {key:"listkey"}, [
    [
      React.createElement("li", {key:"1"}, "about us "),
      React.createElement("li", {key:"2"}, "about ME "),
      React.createElement("li", {key:"3"}, "KEEP us "),
    ],
  ]),
]);
// this is total a mess
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
