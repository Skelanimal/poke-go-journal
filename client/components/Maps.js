import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => (
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" />
)

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.78,
      lng: -73.97
    },
    zoom: 12
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyBpISHmADRr04UVDiJjmoU9jnW4vXEEcbo'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          <AnyReactComponent lat={40.7831} lng={-73.9712} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
