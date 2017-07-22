import React, { Component } from "react";
import "./App.css";
import fakeData from "./components/fakeData.js";
//import WritingSpace from "./components/writingSpace.js";
import WritingSpace from "./components/test.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          hello {console.log("test")}{" "}
        </div>
        <div className="bottom">
          <div className="leftSideBar">left</div>
          <div className="maindiv">
            <WritingSpace className="WritingSpace" />
            <WritingSpace />
            <WritingSpace />
            <WritingSpace />
          </div>
          <div className="rightSideBar">right</div>
        </div>
      </div>
    );
  }
}

export default App;
