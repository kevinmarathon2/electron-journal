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
          <div className="leftSideBar">
            <svg width="80" height="100">
              <polygon points=" 1 50 , 70 100 , 70 0, 1 50" className="arrow" />
            </svg>
          </div>
          <div className="maindiv">
            {fakeData.map((iteminfo, key) => {
              console.log(iteminfo);
              return <WritingSpace key={key} savedData={iteminfo} />;
            })}
          </div>
          <div className="rightSideBar">
            <svg width="80" height="100">
              <polygon points=" 70 50 , 1 100 , 1 0, 70 50" className="arrow" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
