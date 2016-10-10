var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

    getInitialState: function() {
        return {
            isLoading: false
        }
    },

    handleSearch: function(location) {

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp) {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }.bind(this), function(errorMessage) {
            this.setState({isLoading: false});
            alert(errorMessage);
        }.bind(this));
    },

    render: function() {

        var {isLoading, location, temp} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching weather....</h3>
            } else if (location && temp) {
                return <WeatherMessage location={location} temp={temp} />
            }
        }

        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
