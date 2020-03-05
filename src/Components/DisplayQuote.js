import React, { Component } from "react";

class DisplayQuote extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>{this.props.simpsonQuote.quote}</div>
        <div>
          <img src={this.props.simpsonQuote.image} alt="simpson"></img>
        </div>
        <div>{this.props.simpsonQuote.character}</div>
      </div>
    );
  }
}

export default DisplayQuote;
