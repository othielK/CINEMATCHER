/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";

export default function MoodCards(details) {
  return (
    <>
      <img src={details.imgSrc} alt={details.name} />
      <h1> {details.name}</h1>
    </>
  );
}

MoodCards.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
