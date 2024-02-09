import { Component } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

class CityCard extends Component {
  state = {
    cityObject: null,
    isLoading: true,
  };

  componentDidMount() {
    this.fetchCityData();
  }

  fetchCityData = () => {
    this.setState({
      isLoading: true,
    });

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.props.cityName +
        "&appid=68967fec34e8cd131608599e77c69bd5"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero fetch");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          cityObject: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cityName !== this.props.cityName) {
      this.fetchCityData();
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Card>
            <Card.Img
              variant="top"
              src="https://st3.depositphotos.com/1162190/18105/i/950/depositphotos_181058956-stock-photo-global-weather-forecast-background-day.jpg"
            />
            <Card.Body>
              <Card.Title>{this.state.cityObject.name}</Card.Title>
              <Card.Text>
                Humidity: {this.state.cityObject.main.humidity}, Temp:{" "}
                {this.state.cityObject.main.temp}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}

export default CityCard;
