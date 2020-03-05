import React, { Component } from "react";
import axios from "axios";
import DisplayQuote from "./Components/DisplayQuote";
import QuoteButton from "./Components/QuoteButton";

const API = "https://thesimpsonsquoteapi.glitch.me/quotes";

class App extends Component {
  state = {
    simpsonQuote: "",
    apiCalled: false
  };

  getQuote = () => {
    axios.get(API).then(results => {
      this.setState({
        simpsonQuote: results.data[0],
        apiCalled: true
      });
    });
  };

  render() {
    return (
      <div>
        <QuoteButton getQuote={() => this.getQuote()} />
        {this.state.apiCalled ? (
          <DisplayQuote simpsonQuote={this.state.simpsonQuote} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
