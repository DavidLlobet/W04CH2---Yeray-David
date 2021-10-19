import PropTypes from "prop-types";
import { useState } from "react";

const Letter = ({ text, actionOnClick }) => {

  let [disabled, setDisabled] = useState(false);

  Letter.propTypes = {
    text: PropTypes.string.isRequired,
    actionOnClick: PropTypes.func.isRequired,
  };

  const disableButton = () => {
    setDisabled(true);
  };

  return <button {disabled ? 'disabled' : ''} nClick={(actionOnClick, disableButton)}>{text}</button>;
};

export default Letter;
