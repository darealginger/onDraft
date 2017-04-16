import React, { Component, PropTypes } from 'react';

export default class Beer extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

Beer.propTypes = {
    // This component gets the beer to display through a React prop.
    // We can use propTypes to indicate it is required
    beer: PropTypes.object.isRequired,
};
