import React from 'react';
import { useLocation } from 'react-router-dom';

function DashboardHeader() {
    return (
        <nav  className="header">
            <div>
                <ChangePageName />
            </div>

        </nav>

    );
}

function ChangePageName() {
    const currentPath = useLocation().pathname
    const data = useLocation().state;
    console.log(currentPath)
    let pageText

    if (currentPath === "/") {
        pageText = "Login"
    }
    else if (currentPath === "/Home" || currentPath === "/home") {
        pageText = "Machines Overview"
    }
    else if(currentPath === "/Molds" || currentPath === "/molds") {
        pageText = "Molds Overview"
    }
    else if(currentPath === "/Machine" || currentPath === "/machine"){
        const machineId = data.id;
        pageText = "Machine " + machineId
    }

    return(
        <div>{pageText}</div>
    );
}

export default DashboardHeader;