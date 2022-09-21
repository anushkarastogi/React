import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="download.png" alt="React image" width="40px" />
    <h1>Fun Facts About React</h1>
    <ul>
      <li>was originally released in 2013</li>
      <li>was originally created by Jordan Walke</li>
      <li>has well over 100k stars</li>
      <li>is maintained by Facebook</li>
      <li>powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);
ReactDOM.render(page, document.getElementById("root"));
