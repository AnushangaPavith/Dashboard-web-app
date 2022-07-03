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
    // console.log(currentPath)
    let pageText

    if (currentPath === "/") {
        pageText = "Machines Overview"
    }
    else if(currentPath === "/Molds") {
        pageText = "Molds Overview"
    }
    else if(currentPath === "/machines") {
        pageText = "Machine No"
    }
    else if(currentPath === "/Machine"){
        const machineId = data.id;
        pageText = "Machine " + machineId
    }

    return(
        <div>{pageText}</div>
    );
}

export default DashboardHeader;