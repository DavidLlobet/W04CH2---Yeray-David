import PropTypes from "prop-types";

const Cell = ({ letter }) => {
  return <li>{letter}</li>;
};

Cell.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default Cell;
