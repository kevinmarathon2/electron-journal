import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Rx from "rxjs/Rx";
//var cheerio = require("cheerio");

class WritingSpace extends Component {
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
              document.getElementById("test").innerHTML = clipboard.getData(
                clipboard.types[i]
              );
            }
          }
        }
      }
    });
  }
  render() {
    return <input type="text" />;
  }
}

export default WritingSpace;

//DeadCode
// var IMAGE_MIME_REGEX = /^image\/(p?jpeg|gif|png)$/i;
// var items = ev.clipboardData.items;
//console.log(ev);

// for (var i = 0; i < items.length; i++) {
//   // console.log(items[i].type);
//   if (IMAGE_MIME_REGEX.test(items[i].type)) {
//     // console.log(items[i].getAsFile());

//     var reader = new FileReader();
//     reader.onload = function(e) {
//       var img = document.createElement("img");
//       img.src = e.target.result;

//       var range = window.getSelection().getRangeAt(0);
//       range.deleteContents();
//       range.insertNode(img);
//     };
//     reader.readAsDataURL(items[i].getAsFile());
//   }
// }

//console.log("... types[" + i + "] = " + clipboard.types[i]);
//console.log(clipboard.getData(clipboard.types[i]));

//var $ = cheerio.load(clipboard.getData(clipboard.types[i]));
