import { Outlet } from "react-router";
import Header from "./Header"

const AppLayout = () => {
    return (
        <div className="app">

            {/* Header */}
            <Header />

            <Outlet />

            {/* Footer */}

        </div>
    )
};

export default AppLayout;