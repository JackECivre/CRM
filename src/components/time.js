import React from "react";
import "../css/App.css";


class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: Date(),
        };
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="timeContainer"> {this.state.time} </div>
        );
    }
}

export default Time