import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogoutPopUp from './LogoutPopUp';

function DashboardHeader() {
    return (
        <nav  className="header" data-testId="dashboard-header">
            <div>
                <ChangePageName />
            </div>

        </nav>

    );
}

function ChangePageName() {
    const currentPath = useLocation().pathname
    const data = useLocation().state;
    const [openModel, setopenModel] = useState(false);

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
    else if(currentPath === "/AddMachine" || currentPath === "/Addmachine" || currentPath === "/addmachine"){
        pageText = "Add Machine"
    }

    return(
        <header className='center-header'>
            {pageText}
            <button className='logout-btn' onClick={() => setopenModel(true)}>Logout</button> 
            {openModel && (<LogoutPopUp closeModel={() => setopenModel(false)} />)}
        </header>
    );
}

export default DashboardHeader;