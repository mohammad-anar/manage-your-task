import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="space-y-4 text-center flex items-center h-screen flex-col justify-center">
            <h2 className="text-7xl font-bold text-red-600">404</h2>
            <h3 className="text-xl font-semibold">Sorry! Error is occourd</h3>
            <Link to="/"><button className="bg-red-600 text-white border-0 outline-none p-2 px-5">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;