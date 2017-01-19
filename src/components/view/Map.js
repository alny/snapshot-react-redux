import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap } from 'react-google-maps'

class Map extends Component {
  constructor(){
    super()
    this.state = {
      map: null
    }
  }

  mapDragged(){
    let latlng = this.state.map.getCenter().toJSON()
    this.props.mapMoved(latlng)
  }

  render(){
    const mapContainer = <div style={{minHeight:1200, height: '100%', width: '100%'}}></div>

    return(

      <GoogleMapLoader
        containerElement = {mapContainer}
        googleMapElement = {
          <GoogleMap
              ref={ (map) => {
                if(this.state.map != null)
                return

                this.setState({map: map})
              }
            }
            defaultZoom = {this.props.zoom}
            defaultCenter = {this.props.center}
            onDragend={this.mapDragged.bind(this)}
            options={{streetViewControl: false, mapTypeControl: false}}>
          </GoogleMap>
        }/>

    )
  }
}

export default Map
