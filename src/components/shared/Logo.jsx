/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Logo = ({color}) => {
    return (
        <Link to="/">
            <div className={`text-3xl font-bold ${color ? `text-${color}` : "text-white"} shadow p-4 inline-block rounded-xl`}>
            TaskMingle
        </div>
        </Link>
    );
};

export default Logo;