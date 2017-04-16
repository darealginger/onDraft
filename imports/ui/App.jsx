import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Beers } from '../api/beers.js';
import Beer from './components/Beer.jsx';

import Search from './components/Search.jsx';

// App component - represents the whole app
class App extends Component {

    render() {
        return (
            <div className="container">
                <Search />
            </div>
        );
    }
}

App.propTypes = {
    //beers: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        //beers: Beers.find({}).fetch(),
    };
}, App);