import React, { Component } from "react";

class QuoteButton extends Component {
  state = {};
  render() {
    return <button onClick={this.props.getQuote}>Generate Quote</button>;
  }
}

export default QuoteButton;
