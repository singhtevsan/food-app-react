import { Outlet } from "react-router";
import Header from "./Header"
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Footer from "./Footer";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {

    // const [userName, setUserName] = useState();

    // useEffect( ()=>{
    //     setUserName("Tony Stark");
    // }, []);

    return (
        <Provider store={appStore}>
        {/* <UserContext.Provider value={{loggedInUser : userName, setUserName}}> */}
            <div className="app">

                {/* Header */}
                <Header />

                <Outlet />

                {/* Footer */}
                <Footer />

            </div>
        {/* </UserContext.Provider> */}
        </Provider>
    )
};

export default AppLayout;