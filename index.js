import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      json_objs: [ {userId: ' ', id : '1', title : 'dsfsd', body : '2312'}],
      news_api: [{status: "ok", source: "time", sortBy: "top", 
      articles: Array[
        {"author":"Lissandra Villa","title":"Co", "description":"Biden and", "url":"http://time.com/",
        "urlToImage":"https://api.time.com/", "publishedAt":"2020-03-16T04:23:24Z" }
      ]}
      ]
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
      "GET",
      "https://jsonplaceholder.typicode.com/posts",
    // "https://newsapi.org/v1/articles?source=time&sortBy=latest&apiKey=1d825f6378f2460d8bcf7edc35915e0f",
      true
    );
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
       this.setState({json_objs : JSON.parse(xhr.responseText)});
        //   this.setState({news_api : JSON.parse(xhr.responseText)});

          console.log(this.state.json_objs);
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
// works
      <ul>
          {this.state.json_objs.map(item => (
            <li key={item.id}>
            Id: {item.id} <br/>
            Title: {item.title} <br/>
body: {item.body}
            </li>
          ))}
        </ul>
// does not work, no id  field
articles is not an array 
      <ul>
          {this.state.news_api.articles.map(item => (
            <li key={item.title}>
            title: {item.title} <br/>
            title: {item.title} <br/>
description: {item.description}
            </li>
          ))}
        </ul>



*/

  render() {
    console.log("rendering");
    console.log(this.state.json_objs);
    return (
      <div>

      <ul>
          {this.state.json_objs.map(item => (
            <li key={item.id}>
            Id: {item.id} <br/>
            Title: {item.title} <br/>
body: {item.body}
            </li>
          ))}
        </ul>
    </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
