import { useState } from "react";

const Message = ({ text }) => {
  let [message, setMessage] = useState(text);

  return <h2>{text}</h2>;
};
