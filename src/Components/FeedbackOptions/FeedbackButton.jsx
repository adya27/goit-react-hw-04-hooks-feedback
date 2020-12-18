import styles from "./FeedbackButton.module.css";
import PropTypes from "prop-types";

function FeedbackButton(prop) {
  return (
    <button
      className={styles.FeedbackButton}
      type="button"
      onClick={prop.handle}
    >
      {prop.btnName}
    </button>
  );
}

FeedbackButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default FeedbackButton;
