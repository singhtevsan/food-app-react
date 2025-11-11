import { Outlet } from "react-router";
import Header from "./Header"
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect( ()=>{
        setUserName("Tony Stark");
    }, []);

    return (
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
            <div className="app">

                {/* Header */}
                <Header />

                <Outlet />

                {/* Footer */}

            </div>
        </UserContext.Provider>
    )
};

export default AppLayout;