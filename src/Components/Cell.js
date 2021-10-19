import PropTypes from "prop-types";

const Cell = ({ letter }) => {
  return (
    <li className="word" onClick={actionOnClick}>
      {text}
    </li>
  );
};
