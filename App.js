// create the element
// at the end of the day it's just an object
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
// 
// ReactElement(Object) => HTML(Browser Understands)
// 


const parent = React.createElement(
  "div",
  {id:"parent"},
    React.createElement("div", {id:"child"}, [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ]),
  
)

// JSX

console.log(parent); //object


// create the root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
