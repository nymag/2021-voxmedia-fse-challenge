import React, { Component } from "react";
import "./TubeViewer.css";

class TubeViewer extends Component {
  state = {
    tubeItems: []
  };

  componentDidMount() {
    this.getTubeData();
  }

  // Use `fetch` to get video data from the API. Calling `setState` will cause
  // the component to re-render.
  getTubeData = () => {
    this.setState({
      tubeItems: [
        {
          title: "Episode 1",
          id: "CAW1",
          views: 702,
          url: "oldtube.com/1",
          provider: "oldtube"
        }
      ]
    })
  };

  render() {
    const { tubeItems } = this.state;

    return (
      <div className="tube-items">
        <div className="tube-item">
          {tubeItems.length > 0 && tubeItems[0].title}
          {/* Render all tube items */}
        </div>
      </div>
    );
  }
}

export default TubeViewer;
