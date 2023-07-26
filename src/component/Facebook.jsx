import React, { useEffect, useState } from "react";
import "../web/Style.css";
import Message from "./Message";
import db from "./Firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { FormControl, Input } from "@mui/material";

function Facebook() {
  const [input, setInput] = useState(" ");
  const [messages, setMessages] = useState([
    // { username: "abhishek", message: "whats up" },
    // { username: "vishal", message: "hows you" },
  ]);
  const [username, setUsername] = useState(" ");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name "));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { username: username, text: input }]);
    setInput(" ");
  };

  return (
    <div className="file">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png"
        alt="oops !"
        width={"7%"}
        style={{ marginBottom: "-24px" }}
      />
      <h1> Hello Software Programmer !</h1>
      <h1> Welcome {username}</h1>

      <form className="app__form">
        <FormControl className="app__control">
          {/* <InputLabel>Enter a message...</InputLabel> */}
          
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Facebook;
