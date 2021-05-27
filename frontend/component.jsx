import React, { Component } from 'react';
import './component.css';
import TubeItem from './TubeItem';

class MetViewer extends Component {
  state = {
    tubeItems: [],
  }

  componentDidMount() {
    const params = new URLSearchParams(document.location.search.substring(1));
    const id = params.get("id");

    if (id) {
      // get by id
      return this.getTubeData(id);
    }
      // get them all
      return this.getTubeData();
  }

  getTubeData = (id='') => {
    return fetch(`http://localhost:3002/videos/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          tubeItems: data
        });
      });
  }

  render() {
    const { tubeItems } = this.state;

    return (
      // Challenge: Replace `div`s with semantic HTML5 elements.
      // Challenge: Change the backend to add an `/:id` endpoint.
      // Challenge: Add fallback UI (this.tubeItem && ... || ...).
      <div className="tube-items">
        <div className="tube-item">
          { tubeItems.map(tubeItem => {
            return tubeItem 
            // && (
            //   <div className="tube-title">
            //     <h2>{ tubeItem.title }</h2>
            //     <p>{ tubeItem.unique_slug }</p>
            //     <p>{ tubeItem.url }</p>
            //   </div>
            // )

            && <TubeItem title={tubeItem.title}></TubeItem>
            // <TubeItem { ...tubeItem } />
            // <TubeItem title='Titillatingly Titular' />
            // <TubeItem slug={ tubeItem.slug }>
            //   <h1>{ tubeItem.title }</h1>
            // </TubeItem>
          }) }
        </div>
      </div>
    )
  }
}

export default MetViewer;
