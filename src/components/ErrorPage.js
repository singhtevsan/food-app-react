import { useRouteError } from "react-router";
import { ERROR_IMG } from "../utils/constant";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="errorPage">
            <div className="errorImg">
                <img src={ERROR_IMG} alt="error" />
            </div>
            
            <h2>Opps !!</h2>
            <h2>Something Went Wrong !!</h2>
            <h2>{error.status + " : " + error.statusText}</h2>
        </div>
    )
};

export default ErrorPage;