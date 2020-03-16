import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      json_objs: [ {userId: ' ', id : '1', title : 'dsfsd', body : '2312'}]
      // {
 //       status: "ok",
 //        source: "time",
  //       sortBy: "top",
   //      articles: Array[30],
  //      jsonString: " "
  //    }
    };
  }

  componentDidMount() { }
  componentWillMount() {
    var xhr = new XMLHttpRequest();
    var status = false;
    xhr.open(
      "GET","https://jsonplaceholder.typicode.com/posts",
   //   "https://newsapi.org/v1/articles?source=time&sortBy=latest&
   // apiKey=1d825f6378f2460d8bcf7edc35915e0f",
      true
    );
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.setState({json_objs : JSON.parse(xhr.responseText)});

        //  console.log(this.state.json_objs);
      //    this.state.jsonString = JSON.stringify(this.state.json_objs);
       //   console.log(jsonString);
          status = true;
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    console.log("sending");
    xhr.send(null);
    console.log("sent");
  }
/*
        <p> status: {this.state.json_objs.status}</p>
        <p> source: {this.state.json_objs.source}</p>
        <ul> {this.state.json_objs.articles}</ul>
                News from <a href="https://newsapi.org"> newsapi.org </a> <br/>
        Posts from <a href="https://jsonplaceholder.typicode.com/posts"> https://jsonplaceholder.typicode.com/posts</a> 
*/

  render() {
    console.log("rendering");
    console.log(this.state.json_objs);
    return (
      <div>
      asfadsf
    <ul>
      {this.state.json_objs.map(( id, title ) => {
        return <li key={id}>item {title}</li>
      })}
    </ul>
    </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
