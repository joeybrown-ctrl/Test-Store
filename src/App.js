import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Results from "./components/Results";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return(
      <Wrapper>
        <Nav />
        <br />
        <Title>Welcome to the Test Store!</Title>
        <Container>
          <Results />
        </Container>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
