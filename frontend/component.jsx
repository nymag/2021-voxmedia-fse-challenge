import React, { Component } from 'react';
import './component.css';

class MetViewer extends Component {
  state = {
    tubeItem: {},
  }

  componentDidMount() {
    this.getTubeData();
  }

  getTubeData = () => {
    return fetch("http://localhost:3002/original")
      .then(response => response.json())
      .then(data => {
        this.setState({
          tubeItem: data[0]
        });
      });
  }

  render() {
    const { tubeItem } = this.state;

    return (
      // Challenge: Replace `div`s with semantic HTML5 elements.
      // Challenge: Change the backend to add an `/:id` endpoint.
      // Challenge: Add fallback UI (this.tubeItem && ... || ...).
      <div className="tube-items">
        <div className="tube-item">
          { tubeItem && (
            <div className="tube-title">
              { tubeItem.title }
            </div>
          ) }
        </div>
      </div>
    )
  }
}

export default MetViewer;
