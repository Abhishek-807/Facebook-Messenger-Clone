import React, { forwardRef } from "react";
import "../web/Style.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message  ${isUser && "message__user"}`}>
      <div className={isUser ? "message__userCard" : "message__guestCard"}>
        <h3>
          {!isUser && `${message.username || "Unknown User"} :`}{" "}
          {message.message}
        </h3>
      </div>
    </div>
  );
});
export default Message;
