import PropTypes from "prop-types";

const Box = ({ letter }) => {
  Box.propTypes = {
    letter: PropTypes.string.isRequired,
  };

  return <li>{letter}</li>;
};

export default Box;
