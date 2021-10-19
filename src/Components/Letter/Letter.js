import PropTypes from "prop-types";
import { useState } from "react";
import "./Letter.css";

const Letter = ({ text, actionOnClick }) => {
  let [disabled, setDisabled] = useState(false);

  const a = 1;

  Letter.propTypes = {
    text: PropTypes.string.isRequired,
    actionOnClick: PropTypes.func.isRequired,
  };

  const disableButton = () => {
    setDisabled(true);
  };

  return (
    <button disabled={disabled} onClick={(() => actionOnClick, disableButton)}>
      {text}
    </button>
  );
};

export default Letter;
