import React, {Component} from 'react';

class GoogleMap extends Component{
    //3rd party library integration
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render(){
        //React has a reference system and using key ref allows this this.refs.map
        return <div ref="map"/>;
    }
}

export default GoogleMap;
