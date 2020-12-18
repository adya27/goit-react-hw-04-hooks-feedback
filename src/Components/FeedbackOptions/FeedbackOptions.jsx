import FeedbackButton from "./FeedbackButton";
import PropTypes from "prop-types";

function FeedbackOption({ handleGood, handleNeutral, handleBad }) {
  return (
    <section>
      <FeedbackButton btnName="Good" handle={handleGood} />
      <FeedbackButton btnName="Neutral" handle={handleNeutral} />
      <FeedbackButton btnName="Bad" handle={handleBad} />
    </section>
  );
}

export default FeedbackOption;

FeedbackOption.propTypes = {
  handleBad: PropTypes.func.isRequired,
  handleGood: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
};
