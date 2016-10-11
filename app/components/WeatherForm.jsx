var React = require('react');

var WeatherForm = React.createClass({

    getInitialState: function() {
        return {
            location: ''
        }
    },

    onChange: function(e) {
        this.setState({
            location: e.target.value
        });
    },

    onSubmit: function(e) {
        e.preventDefault();

        if(this.state.location.length > 0) {
            this.props.onSearch(this.state.location);
            this.setState({
                location: ''
            });
        }
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        ref={function(input) {
                            if(input != null) {
                                input.focus();
                            }
                        }}
                        value={this.state.location}
                        onChange={this.onChange}
                        placeholder="Enter a location"
                        type="search"
                    />
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
