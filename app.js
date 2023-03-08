const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "this is my first line in react  code"
);
// ! <h1 idea="tag"> "this is my first line in react  code" </h1>

const heading2 = React.createElement("h2", 
{ id: "title" }, "this is 2nd line");

const container = React.createElement("div",
 { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
 
