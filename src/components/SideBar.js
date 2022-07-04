import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import { AiFillDatabase } from "react-icons/ai";
import { SiReactos } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";

function SideBar () {
    return (
        <div className='sidebar'>
            <header><SiReactos /> Company Name</header>
            <ul>
                <ActivePageLink to= "/Home"><MdSpaceDashboard /> Dashboard</ActivePageLink>
                <ActivePageLink to= "/Molds"><AiFillDatabase /> Production Data</ActivePageLink>
            </ul>
        </div>
    );
}

function ActivePageLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default SideBar;