import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 className="heading" tabIndex={1}>
    This is React Heading using jsxHeading 🚀
  </h1>
);
//? React Component
//? Class based component - Old
//? Functional Component -New
const Title = () => (
   <h1 className="head">React using Title!!!</h1>
);
const number = 100;
const HeadingComponent = () => (
  <div id="container">
    <span> {Title()}</span>
    <Title />
    <h1 className="heading"> This is Fuctional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); //? root element of html
root.render(<HeadingComponent />);
