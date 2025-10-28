import React from "react"

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
            counter: 1
        }
        this.increase = this.increase.bind(this);
    }

    increase(){
        this.setState({
            count: this.state.count+1,
            counter: this.state.counter+2
        })
    }

    render() {
        const {location} = this.props;
        const {counter} = this.state;

        return (
            <div style={{border: "1px solid black", width: "400px", margin: "20px", padding: "10px"}}>
                <h2>Count = {this.state.count}</h2>
                <h2>Counter = {counter}</h2>

                <button onClick={this.increase}>Button</button>

                <h2>Name: {this.props.name}</h2>
                <h2>Location: {location}</h2>
            </div>
        )
    }
};

export default UserClass;