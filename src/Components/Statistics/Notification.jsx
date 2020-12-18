import PropTypes from "prop-types";

function Notification(props) {
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
