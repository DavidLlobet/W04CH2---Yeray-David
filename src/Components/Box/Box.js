import PropTypes from "prop-types";
import "./Box.css";

const Box = ({ letter }) => {
  Box.propTypes = {
    letter: PropTypes.string.isRequired,
  };

  return <li className="game__letter">{letter}</li>;
};

export default Box;
