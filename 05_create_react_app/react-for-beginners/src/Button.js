import PropTypes from "prop-types";
import styles from "./Button.module.css"; // css module 만들어서 적용하기 (xxx.module.css)

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
