import React from "react"

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
            counter: 1,
            userInfo: {
                name: "default",
                location: "default"
            }
        }
        this.increase = this.increase.bind(this);
        console.log(this.props.name + "From User Class Constructor");
    };

    increase(){
        this.setState({
            count: this.state.count+1,
            counter: this.state.counter+2
        })
    };

    async componentDidMount() {
        console.log(this.props.name + "Component did mount");
        
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();

        this.setState({
            userInfo: json
        });

        this.set = setInterval(()=>{
            console.log("React Calling React");
        }, 1000)
    };

    componentDidUpdate() {
        console.log(this.props.name + "Component did update");
    };

    componentWillUnmount() {
        console.log(this.props.name + "Component will unmount");

        clearInterval(this.set);
    };

    render() {
        const {location} = this.props;
        const {counter} = this.state;
        console.log(this.props.name + "From User Class Render");

        return (
            <div style={{border: "1px solid black", width: "400px", margin: "20px", padding: "10px"}}>
                <h2>Count = {this.state.count}</h2>
                <h2>Counter = {counter}</h2>

                <button onClick={this.increase}>Button</button>

                <h2>Name: {this.props.name}</h2>
                <h2>Location: {location}</h2>

                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Name: {this.state.userInfo.location}</h2>
                <img src={this.state.userInfo.avatar_url} width={200}/>
            </div>
        )
    }
};

export default UserClass;