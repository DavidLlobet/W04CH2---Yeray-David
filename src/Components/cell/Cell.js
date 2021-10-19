import PropTypes from "prop-types";

const Cell = ({ letter }) => {
  Cell.propTypes = {
    letter: PropTypes.string.isRequired,
  };

  return <li>{letter}</li>;
};

export default Cell;
