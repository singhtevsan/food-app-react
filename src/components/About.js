import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <div>
                <h2>Hello World</h2>
            </div>
            <User name={"Tony Stark (Function)"} location={"New York NYF"} />
            <UserClass name={"Steve Rogers (Class)"} location={"New York NYC"} />
        </div>
    )
};

export default About;