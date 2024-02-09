import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import CityChooser from "./Components/CityChooser";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CityCard from "./Components/CityCard";

class App extends Component {
  state = {
    cityName: "San Cataldo",
  };

  changecityName = (newName) => {
    this.setState({
      cityName: newName,
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <header>
            <CustomNavbar />
          </header>

          <main>
            <Container className="my-5">
              <Row className="justify-content-center">
                <Col xs={12} md={6}>
                  <CityChooser
                    cityName={this.state.cityName}
                    changecityName={this.changecityName}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center mt-5">
                <Col xs={12} md={6}>
                  <CityCard cityName={this.state.cityName} />
                </Col>
              </Row>
            </Container>
          </main>

          <footer></footer>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
