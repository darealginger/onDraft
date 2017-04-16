import React, { Component, PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';

// sample dummy test data
const venues = [
    {
        name: 'Balter BeerWorks',
        year: 2016
    },
    {
        name: 'Last Days of Autumn',
        year: 2011
    },
    {
        name: 'Central Flats',
        year: 2016
    },
    {
        name: 'Suttrees',
        year: 2011
    }
];

// teach autosuggest how to calculate suggestions for any given input value
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : venues.filter(v =>
        v.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// teach autosuggest how to calculate the input value for every given suggestion
const getSuggestionValue = suggestion => suggestion.name;
//render suggestions
const renderSuggestion = suggestion => (
    <div>{suggestion.name}</div>
);

export default class Search extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange(event, { newValue }) {
        this.setState({
            value: newValue
        });
    }
    // call this function every time you need to update suggestions
    onSuggestionsFetchRequested( { value } ) {
        const a = getSuggestions(value);
        this.setState({
            suggestions: getSuggestions(value)
        });
    }
    //call this every time we need to clear suggestions
    onSuggestionsClearRequested() {
        this.setState({
            suggestions: []
        });
    }

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Please enter a venue',
            value,
            onChange: this.onChange.bind(this)
        };
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

Search.propTypes = {
    //
};