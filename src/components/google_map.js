import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        debugger;
        let map = new google.maps.Map(this.refs.map, {
            zoom: 18,
            center: new google.maps.LatLng(this.props.lat, this.props.lng)
        });

        this.renderPointers(map)
    }

    renderPointers(map) {

        this.props.listOfPlaces.map(place => new google.maps.Marker({
            position: new google.maps.LatLng(place.Latitude, place.Longitude),
            map: map
        }));
    }

    render() {
        return <div className="lolcat" ref="map" />
    }
}

export default GoogleMap;