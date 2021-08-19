import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Terminal from "xterm";
import "xterm/lib/xterm.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <div id="terminal"></div>
  </div>
);

render(<App />, document.getElementById("root"));
var term = new Terminal();
term.open(document.getElementById("terminal"), false);
var shellprompt = ">";

term.prompt = function () {
  term.write("\r\n" + shellprompt);
};

term.writeln("Welcome to xterm.js");
term.writeln(
  "This is a local terminal emulation, without a real terminal in the back-end."
);
term.writeln("Type some keys and commands to play around.");
term.writeln("");
term.prompt();
term.setOption("cursorBlink", true);

var cmd = "";

term.on("key", function (key, ev) {
  var printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

  if (ev.keyCode === 13) {
    if (cmd === "clear") {
      term.clear();
    }
    showalert();
    cmd = "";
    term.prompt();
  } else if (printable) {
    cmd += key;
    term.write(key);
  }
});

term.on("paste", function (data, ev) {
  term.write(data);
});

const showalert = () => {
  fetch("./test.json")
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};
