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
    console.log(currentPath)
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
    else {
        pageText = "Machine"
    }

    return(
        <div>{pageText}</div>
    );
}

export default DashboardHeader;