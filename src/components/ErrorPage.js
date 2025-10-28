import { useRouteError } from "react-router";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="errorPage">
            <div className="errorImg">
                <img src="https://img.lovepik.com/element/45008/9097.png_860.png" alt="error" />
            </div>
            
            <h2>Opps !!</h2>
            <h2>Something Went Wrong !!</h2>
            <h2>{error.status + " : " + error.statusText}</h2>
        </div>
    )
};

export default ErrorPage;