import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <div>
//                 <h2>Hello World</h2>
//             </div>
//             <User name={"Tony Stark (Function)"} location={"New York NYF"} />
//             <UserClass name={"Steve Rogers (Class)"} location={"New York NYC"} />
//         </div>
//     )
// };


class About extends React.Component {

    constructor(props) {
        super(props);

        console.log("From About Class Constructor");
    };

    componentDidMount() {
        console.log("About Class Component did mount");
    };

    componentDidUpdate() {
        console.log("About Class Component did update");
    };

    componentWillUnmount() {
        console.log("About Class Component will unmount");
    };

    render() {

        console.log("From About Class Render");
        return (
            <div>
                <div>
                    <h2>Hello World</h2>
                </div>
                <User name={"Tony Stark (Function)"} location={"New York NYF"} />
                <UserClass name={"Steve Rogers (Class)"} location={"New York NYC"} />
                <UserClass name={"Thor Odinson (Class)"} location={"Asguard CLASS"} />
            </div>
        )
    }
};

export default About;