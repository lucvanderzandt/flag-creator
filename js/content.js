/*
 * Title: Flag creator
 * Author: Luc van der Zandt 
 * Version: v0.2
 *
 */

// Handles the rendering of the top color of the flag
var FlagTop = React.createClass({
    getInitialState(){
        return {color: "#FF0000"}; // Initial color is red
    },
    
    // When the content of the text field changes, this function is called
    handleChange: function(e){
        e.preventDefault(); // Prevent handling the default value (current color)
        changeColor(this); // See below
        return; 
    },

    // Render it
    render: function(){ 
        var style = {
            backgroundColor : this.state.color, // Color is hex value in text field
            width : this.props.width, // Fill the whole width of the page
            height : this.props.height, // Fill one-third of the height of the page
            float: "left"
        };
        // Return the HTML 
        return (
            <div className="flagTop" style={style}>
                <input type="text" placeholder={this.state.color} onChange={this.handleChange} ref="color"/>
            </div>
        );
    }
});

// Handles the rendering of the central color of the flag
var FlagCentral = React.createClass({
    getInitialState(){
        return {color: "#FFFFFF"}; // Initial color is white
    },
    
    // When the content of the text field changes, this function is called
    handleChange: function(e){
        e.preventDefault(); // Prevent handling the default value (current color)
        changeColor(this); // See below
        return;
    },

    // Render it
    render: function(){
        var style = {
            backgroundColor : this.state.color, // Color is the hex value in text field
            width: this.props.width, // Fill the whole width of the page
            height: this.props.height, // Fill one-third of the height of the page
            float: "left"
        };

        // Return the HTML
        return (
            <div className="flagCentral" style={style}>
                <input type="text" placeholder={this.state.color} onChange={this.handleChange} ref="color"/>
            </div>
        );
    }
});

// Handles the rendering of the bottom color of the flag
var FlagBottom = React.createClass({
    getInitialState(){
        return {color: "#0000FF"}; // Inital color is blue
    },

    // When the content of the text field changes, this function is called
    handleChange: function(e){
        e.preventDefault(); // Prevent handling the default value (current color)
        changeColor(this); // See below
        return;
    },

    // Render it
    render: function(){
        var style = {
            backgroundColor : this.state.color, // Color is the hex value in text field
            width: this.props.width, // Fill the whole width of the page
            height: this.props.height, // Fill one-third of the height of the page
            float: "left"
        };

        // Return the HTML
        return (
            <div className="flagBottom" style={style}>
                <input type="text" placeholder={this.state.color} onChange={this.handleChange} ref="color"/>
            </div>
        );
    }
});

// Container class
var Flag = React.createClass({
    // Default: horizontal bars
    getInitialState(){
        return {width: "100%", height: "33vh"};
    },
    
    // On click, switch to vertical bars
    handleClick: function(e){
        if(this.state.width == "100%"){
            this.setState({height: "100vh", width: "33%"});
        }else{
            this.setState({height: "33vh", width: "100%"});
        }
    },

    // Render it
    render : function(){
        // All the components
        return (
            <div className="flag">
                <div>
                    <button onClick={this.handleClick}>Turn</button>
                </div>
                <div>
                    <FlagTop width={this.state.width} height={this.state.height} />
                    <FlagCentral width={this.state.width} height={this.state.height} />
                    <FlagBottom width={this.state.width} height={this.state.height} />
                </div>
            </div>
        );
    }
});

// Function to change color of the given element
var changeColor = function(element){
    if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(element.refs.color.value.trim())){ // If it is a valid hex color value
        element.setState({color: element.refs.color.value.trim()}); // Set the "color" variable in the session to the given color
    }
}

// React render
ReactDOM.render(
    <Flag />,
    document.getElementById('content')
);
