import { useState } from "react";

const Message = ({ text }) => {
  const [message, setMessage] = useState(text);

  return <h2>{text}</h2>;
};

export default Message;
