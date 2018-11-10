import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchMeters} from "../actions";

class PlaceList extends Component {
    renderPlaces(placeData) {
        if (placeData.length < 1) {
            return <div>ENTER a place..</div>
        }
        console.log(placeData);
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Meter Id</th>
                    <th>Map</th>
                </tr>
                </thead>
                <tbody>
                {this.props.placeData.map(this.renderPlaces)}
                </tbody>
            </table>
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