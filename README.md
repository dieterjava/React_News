# react-zva6uf


index.html:
<div id="root"></div>

index.js:

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";

class App extends React.Component {
....
  render() {
    return (
      <div>
.... this will be shown
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

-------------

Created a simple React example

Should read some news in json format from newsapi.org

and display them in a list with 

title
description
url
image

see link for displaying lists in React
https://reactjs.org/docs/lists-and-keys.html

Add source field an button with onclick 
