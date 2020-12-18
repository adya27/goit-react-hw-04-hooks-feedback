// import styles from "./Section.module.css";
import PropTypes from "prop-types";

function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
