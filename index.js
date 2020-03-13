import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      json_obj: {
        status: "ok",
        source: "time",
        sortBy: "top",
        articles: Array[30]
      }
    };
  }

  componentDidMount() { }
  componentWillMount() {
    var xhr = new XMLHttpRequest();
    var status = false;
    xhr.open(
      "GET",
      "https://newsapi.org/v1/articles?source=time&sortBy=latest&apiKey=1d825f6378f2460d8bcf7edc35915e0f",
      true
    );
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.state.json_obj = JSON.parse(xhr.responseText);
          console.log(this.state.json_obj);
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

  render() {
    console.log("rendering");
    return (
      <div>
        News from <a href="https://newsapi.org"> newsapi.org </a>
        <p> status: {this.state.json_obj.status}</p>
        <p> source: {this.state.json_obj.source}</p>
        <ul>{this.state.json_obj.articles} </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
