import React, { Component } from "react";
import "./App.css";
import fakeData from "./components/fakeData.js";
//import WritingSpace from "./components/writingSpace.js";
import WritingSpace from "./components/test.js";

// import low from "lowdb";

// const db = low("data.json");
// db.get("posts").push({ id: 1, title: "kevin is awesome" }).write();
// db.set("user.sdfsdfsdfname", "he;;p").write("copy.json");

// console.log(db.getState());
// console.log(db);

//localStorage.setItem("lastname", "Smith");

//console.log(localStorage.getItem("lastname"));
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">hello</div>
        <div className="bottom">
          <div className="leftSideBar">
            <svg width="80" height="100">
              <polygon points=" 1 50 , 70 100 , 70 0, 1 50" className="arrow" />
            </svg>
          </div>
          <div className="maindiv">
            {fakeData.map((iteminfo, key) => {
              return <WritingSpace key={key} savedData={iteminfo.data} />;
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
