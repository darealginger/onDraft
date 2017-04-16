import React, { Component, PropTypes } from 'react';

export default class Venue extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

Venue.propTypes = {
    // This component gets the beer to display through a React prop.
    // We can use propTypes to indicate it is required
    //venue: PropTypes.object.isRequired,
};
