import { useEffect, useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(1);
    const {name, location} = props;
    
    const increase = function () {
        setCount(count+1);
        setCounter(counter+2);
    };

    useEffect(()=>{
        let set = setInterval(()=>{
            console.log("Function Calling Function");
        },1000);

        return() =>{
            clearInterval(set);
        }

    }, []);

    return (
        <div style={{border: "1px solid black", width: "400px", margin: "20px", padding: "10px"}}>
            <h2>Count = {count}</h2>
            <h2>Counter = {counter}</h2>

            <button onClick={increase}>Button</button>

            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
        </div>
    )
};

export default User;