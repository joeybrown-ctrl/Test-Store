import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Results from "./components/Results";
import Container from "./components/Container";

class App extends Component {
  render() {
    return(
      <Wrapper>
        <Title>Test Store</Title>
        <Container>
          <Results />
        </Container>
      </Wrapper>
    )
  }
}

export default App;
