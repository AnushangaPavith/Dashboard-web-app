import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import { AiFillDatabase } from "react-icons/ai";
import { SiReactos } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDatabaseFill } from "react-icons/ri";
// import LogoutPopUp from './LogoutPopUp';
import React from 'react';

function SideBar () {
    // const [openModel, setopenModel] = useState(false);
    return (
        <div className='sidebar'>
            <header><SiReactos />MONA Plastics</header>
            <ul>
                <ActivePageLink to= "/Home"><MdSpaceDashboard /> Dashboard</ActivePageLink>
                <ActivePageLink to= "/Molds"><AiFillDatabase /> Production Data</ActivePageLink>
                <ActivePageLink to= "/Company"><RiDatabaseFill /> Company Details</ActivePageLink>
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