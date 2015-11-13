/*
 * Title: Flag creator
 * Author: Luc van der Zandt 
 * Version: v0.1
 *
 */

var FlagTop = React.createClass({
    getInitialState(){
        return {color: "#FF0000"};
    },
    
    handleChange: function(e){
        e.preventDefault();
        changeColor(this);
        return; 
    },

    render: function(){
        var style = {
            backgroundColor : this.state.color,
            width : "100%",
            height : "33vh"
        };
        return (
            <div className="flagTop" style={style}>
                <input type="text" placeholder={this.state.color} onChange={this.handleChange} ref="color"/>
            </div>
        );
    }
});

var FlagMiddle = React.createClass({
    getInitialState(){
        return {color: "#FFFFFF"};
    },

    handleChange: function(e){
        e.preventDefault();
        changeColor(this);
        return;
    },

    render: function(){
        var style = {
            backgroundColor : this.state.color,
            width: "100%",
            height: "33vh"
        };

        return (
            <div className="flagMiddle" style={style}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.state.color} onChange={this.handleChange} ref="color"/>
                </form>
            </div>
        );
    }
});

var FlagBottom = React.createClass({
    getInitialState(){
        return {color: "#0000FF"};
    },

    handleChange: function(e){
        e.preventDefault();
        changeColor(this);
        return;
    },

    render: function(){
        var style = {
            backgroundColor : this.state.color,
            width: "100%",
            height: "33vh"
        };

        return (
            <div className="flagBottom" style={style}>
                <input type="text" placeholder={this.state.color} onChange={this.handleChange} ref="color"/>
            </div>
        );
    }
});

var Flag = React.createClass({
    render : function(){
        return (
            <div className="flag">
                <FlagTop />
                <FlagMiddle />
                <FlagBottom />
            </div>
        );
    }
});

var changeColor = function(element){
    if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(element.refs.color.value.trim())){
        element.setState({color: element.refs.color.value.trim()});
    }
}

ReactDOM.render(
    <Flag />,
    document.getElementById('content')
);
