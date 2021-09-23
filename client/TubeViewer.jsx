import "./TubeViewer.css";
import { Component } from "react";
import TubeItem from "./TubeItem";

class TubeViewer extends Component {
  state = {
    tubeItems: []
  };

  // https://reactjs.org/docs/react-component.html#the-component-lifecycle
  // https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    return this.getTubeData();
  }

  getTubeData = () => {
    return fetch("http://localhost:3002/videos/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          tubeItems: data
        });
      });
  };

  render() {
    const { tubeItems } = this.state;

    return (
      <div className="tube-items">
        <div className="tube-item">
          <div>{tubeItems.length > 0 && tubeItems[0].title}</div>
        </div>
      </div>
    );
  }
}

export default TubeViewer;
