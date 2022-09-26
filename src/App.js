import React, { useState } from "react";
import "./App.css";

function RandomSpin(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}


function Magicball(props) {
  const [msg, setMsg] = useState("Thinking of Question");
  const [color, setColor] = useState("black");
  /**need to create click handler for the interaction */
  function handleClick() {
    const {msg, color} = RandomSpin(props.answers);
    setMsg(msg);
    setColor(color);
  }
  /**then return the magicball */
  return (
    <div
      className="Magicball"
      onClick={handleClick}
      style={{ backgroundColor: color}}>
        <b> {msg}</b>
      </div>
  );
}
/**now include the default props */
EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ]
};

export default Magicball;