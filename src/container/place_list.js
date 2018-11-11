import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchMeters} from "../actions";
import GoogleMap from "../components/google_map"

class PlaceList extends Component {

    render() {
        if (this.props.placeData.length < 1) {
            return null;
        }

        if (this.props.placeData[0].length < 1) {
            return <div>Sorry... could not find any parking spots on the given location.</div>;
        }

        debugger;
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
    return { placeData: state.placeData };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMeters}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);