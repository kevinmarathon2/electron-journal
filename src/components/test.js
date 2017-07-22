import React, { Component } from "react";
import ReactDOM from "react-dom";
import Rx from "rxjs/Rx";
import HtmlToReact from "html-to-react";
//var cheerio = require("cheerio");

class Line extends Component {
  constructor() {
    super();
    this.state = {
      mouseover: false
    };
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("paste", ev => {
      //Acess data from Clipboard
      var clipboard = ev.clipboardData;
      // If data is not empty
      if (clipboard.types != null) {
        // Will check all data and find what is html
        for (var i = 0; i < clipboard.types.length; i++) {
          // Data type is not empty
          if (clipboard.getData(clipboard.types[i]) != null) {
            var dataType = clipboard.types[i];
            console.log("type : " + dataType);
            // Finally found html code
            if (dataType.indexOf("html") !== -1) {
              // document.getElementById("test").innerHTML = clipboard.getData(
              //   clipboard.types[i]
              // );
              this.props.onPaste(
                clipboard.getData(clipboard.types[i]),
                this.props.itemkey
              );
            }
          }
        }
      }
    });
  }
  keyPress(e) {
    if (e.key === "Enter") {
      this.props.newLine(this.props.itemkey);
    }
  }
  focus() {
    ReactDOM.findDOMNode(this).focus();
  }
  render() {
    if (this.props.editmode === true) {
      return (
        <input
          type="text"
          className="line"
          value={this.props.text}
          onClick={this.focus.bind(this)}
          onChange={e => {
            this.props.lineEdit(this.props.itemkey, e.target.value, e);
          }}
          onKeyDown={this.keyPress.bind(this)}
          onBlur={() => {
            this.setState({ mouseover: false });
          }}
        />
      );
    } else
      return (
        <div
          onMouseEnter={() => {
            this.setState({ mouseover: true });
          }}
        >
          {this.props.text}
        </div>
      );
  }
}

class WritingSpace extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { element: "div", text: "line 1" },
        { element: "div", text: "line two" }
      ]
    };
  }

  lineEdit(key, newvalue, event) {
    console.log(event);
    let copyofState = this.state.data;
    copyofState[key].text = newvalue;
    this.setState({ data: copyofState });
  }
  newLine(itemkey) {
    console.log("pressed enter with item key" + itemkey);
    var copyData = this.state.data;
    copyData.splice(itemkey + 1, 0, {
      element: "div",
      text: "  "
    });
    this.setState({ data: copyData });
    this.lineInput.focus();
  }
  linePaste(htmlPaste, itemkey) {
    console.log(typeof htmlPaste);
    var copyData = this.state.data;
    copyData.splice(itemkey, 0, {
      element: "html",
      text: htmlPaste
    });
    this.setState({ data: copyData });
  }

  eraseHTML(itemkey) {
    console.log(itemkey);
    var copyData = this.state.data;
    copyData.splice(itemkey, 1);
    this.setState({ data: copyData });
  }
  render() {
    return (
      <div className="WritingSpace">
        {this.state.data.map((item, key) => {
          if (item.element === "div") {
            return (
              <Line
                editmode={true}
                lineEdit={this.lineEdit.bind(this)}
                itemkey={key}
                text={item.text}
                key={key}
                onPaste={this.linePaste.bind(this)}
                ref={input => {
                  this.lineInput = input;
                }}
                newLine={this.newLine.bind(this)}
              />
            );
          } else {
            return (
              <div key={key}>
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
                <div>
                  <button onClick={this.eraseHTML.bind(this, key)}>
                    Erase
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default WritingSpace;

// create an even on line onkeypress that detects when enter has been pressed
// then call a parent method that creates a new Line element makes it empty (pushes a new element on data with empty text)
// use react dom find new element and auto focus

// this.state.data.map(function(item) {
//           return React.createElement(item.element, null, item.text);
//         })

// <pre>
//           {" "}Current Line is {this.state.currentLine}{" "}
//           <span className="BlinkingCursor">|</span>
//         </pre>

// <div dangerouslySetInnerHTML={{ __html: "<h1>Hi there!</h1>" }} />
//var keyMonitor = Rx.Observable.fromEvent(document, "keypress");
// keyMonitor.subscribe(e => {
//       switch (e.key) {
//         case " ":
//           this.setState({ currentLine: this.state.currentLine + " " });
//           break;
//         case "Enter":
//           console.log("Enter pressed");
//           break;
//         default:
//           this.setState({ currentLine: this.state.currentLine + e.key });
//       }

//       console.log(e);
//     })
