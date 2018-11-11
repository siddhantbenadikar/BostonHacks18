import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchMeters} from "../actions";
import GoogleMap from "../components/google_map"

class PlaceList extends Component {

    render() {
        if (this.props.placeData.length < 1) {
            return <div>Enter a value...</div>
        }
        const data = this.props.placeData[0][0];
        const lat = data.Latitude;
        const lng = data.Longitude;

        return (
            <div className="lolcat">
                <GoogleMap lat={lat} lng={lng} listOfPlaces={this.props.placeData[0]}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // return { placeData: [[{"Meter_ID": "1", "Latitude": -34.397, "Longitude": 150.644}]] };
    return { placeData: state.placeData };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMeters}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);