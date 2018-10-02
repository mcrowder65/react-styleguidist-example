import React from "react";
import PropTypes from "prop-types";

/**
 * A Button that takes a text and an onClick
 */
class Button extends React.Component {
  static propTypes = {
    /**
     * The text of the button, this is awesome, idk about you!
     */
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };
  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}

export default Button;
