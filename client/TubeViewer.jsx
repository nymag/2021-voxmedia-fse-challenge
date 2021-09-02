import React, { Component } from "react"
import "./TubeViewer.css"

class TubeViewer extends Component {
  state = {
    tubeItems: []
  };

  componentDidMount () {
    this.getTubeData()
  }

  // Use `fetch` to get video data from the API. Calling `setState` will cause
  // the component to re-render.
  getTubeData = () => {
    this.setState({
      tubeItems: [
        {
          description: "It may seem confusing, but it's 100 percent true! Your budget for engaging should be at least three times your budget for innovating should be at least one-half of your budget for innovating should be at least one-half of your budget for harnessing.",
          id: "CAW1",
          provider: "oldtube",
          title: "Episode 1",
          views: 702
        }
      ]
    })
  };

  render () {
    const { tubeItems } = this.state

    return (
      <div className="tube-items">
        <div className="tube-item">
          { tubeItems.length > 0 && tubeItems[0].title }
          {/* Render all tube items */ }
        </div>
      </div>
    )
  }
}

export default TubeViewer
