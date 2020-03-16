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
      articles: [
        {"author":"Lissandra Villa","title":"Co", "description":"Biden and", "url":"http://time.com/",
        "urlToImage":"https://api.time.com/", "publishedAt":"2020-03-16T04:23:24Z" }
      ]
      }
      ],

            myArticles: [{"author":"Lissandra Villa","title":"Coronavirus Overshadows Debate as Joe Biden and Bernie Sanders Face Off","description":"Biden and Sanders sought to position themselves as the leader with the best vision to guide the country through a national emergency.","url":"http://time.com/5803702/democratic-debate-coronavirus/","urlToImage":"https://api.time.com/wp-content/uploads/2020/03/dem-debate-11-3.jpg?quality=85&crop=0px%2C28px%2C2400px%2C1256px&resize=1200%2C628&strip","publishedAt":"2020-03-16T04:23:24Z"},{"author":"Shira Stein and Jennifer Jacobs / Bloomberg","title":"Key U.S. Health Agency Suffers Cyberattack During Coronavirus Response","description":"The U.S. Health and Human Services Department suffered a cyberattack Sunday night during the nation’s response to the coronavirus pandemic.","url":"http://time.com/5803816/coronavirus-cyberattack/","urlToImage":"https://api.time.com/wp-content/uploads/2020/03/coronavirus-cyberattack.jpg?quality=85&w=1024&h=628&crop=1","publishedAt":"2020-03-16T13:11:26Z"},{"author":"Charlotte Alter","title":"Joe Biden Definitively Vows to Pick a Woman Vice President","description":"In the first one-on-one Democratic primary debate Sunday, former Vice President Joe Biden vowed to pick a woman Vice President.","url":"http://time.com/5803677/joe-biden-woman-vice-president/","urlToImage":"https://api.time.com/wp-content/uploads/2020/03/dem-debate-11-5.jpg?quality=85&w=1200&h=628&crop=1","publishedAt":"2020-03-16T01:47:31Z"},{"author":"JOHN SEEWER / AP","title":"U.S. Hospitals Increasingly Worried About Surge in COVID-19 Cases","description":"Government and hospital leaders in the U.S. are increasingly worried about readiness for the new coronavirus outbreak.","url":"http://time.com/5803605/united-states-hospitals-coronavirus/","urlToImage":"https://api.time.com/wp-content/uploads/2020/03/united-states-coronavirus-hospitals.jpg?quality=85&w=1200&h=628&crop=1","publishedAt":"2020-03-15T21:52:27Z"},{"author":"Jeffrey Kluger","title":"In the Wake of the Coronavirus, Here's Why Americans Are Hoarding Toilet Paper","description":"As America hunkers down against the novel coronavirus, there's one product that's in special demand: toilet paper.","url":"http://time.com/5803273/hoarding-toilet-paper/","urlToImage":"https://api.time.com/wp-content/uploads/2020/03/toiletpaper.jpg?quality=85&w=1200&h=628&crop=1","publishedAt":"2020-03-14T19:55:42Z"},{"author":"Elijah Wolfson","title":"Mapping the Spread of the Coronavirus Outbreak Around the U.S. and the World","description":"See how coronavirus has spread all over the world.","url":"http://time.com/5800901/coronavirus-map/","urlToImage":"https://api.time.com/wp-content/uploads/2020/03/covid-map-march-11.png?w=1200&h=626&crop=1","publishedAt":"2020-03-11T17:01:48Z"},{"author":"Hillary Leung / Hong Kong","title":"Why Wearing a Face Mask Is Encouraged in Asia, but Shunned in the U.S.","description":"As coronavirus continues to spread, face masks in public are common in many parts of Asia, but the U.S. discourages them.","url":"http://time.com/5799964/coronavirus-face-mask-asia-us/","urlToImage":"https://api.time.com/wp-content/uploads/2020/03/new-york-grand-central-mask.jpg?quality=85&w=1024&h=628&crop=1","publishedAt":"2020-03-12T08:05:45Z"}]
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
    //  "https://newsapi.org/v1/articles?source=time&sortBy=latest&apiKey=1d825f6378f2460d8bcf7edc35915e0f",
      true
    );
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
       this.setState({json_objs : JSON.parse(xhr.responseText)});
       //  this.setState({news_api : JSON.parse(xhr.responseText)});
       //  this.setState({myArticles : JSON.parse(this.news_api)});

        console.log(this.state.json_objs);
        debugger;
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
    console.log(this.state.news_api);
    return (
      <div>

      <ul>
          {this.state.myArticles.map(item => (
            <li key={item.title}>
            title: {item.title} <br/>
           <a href={item.url} target="_blank"> {item.url}</a> <br/>
description: {item.description}
            </li>
          ))}
        </ul>
<hr/>
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
