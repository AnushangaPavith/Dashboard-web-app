import React from 'react';
import {useEffect, useState} from 'react';
import Boxes from '@material-ui/core/Box';
import { BsPlusLg } from "react-icons/bs";
import {Link} from 'react-router-dom';
import LogoutPopUp from '../components/LogoutPopUp';

function Homepage() {
    const [openModel, setopenModel] = useState(false);
    const [machines, setMachines] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/machines')
        // fetch('/api/machines')   // This line suppose to work with setupProxy.js file. but it doesn't. So the above line works fine
        .then(results => {
            return results.json()
        })
        .then(jsonData => {
            setMachines(jsonData) 
        });

    }, []);

    let i = 1;

    const machineList = machines.map(machine => <Link to='/Machine' state={{id:machine.machineID}}  key={machine.machineID}>
        <Boxes className='machine-box'> 
        <div className='machine-box-header'>{'Machine ' + i++}</div>
        <div className='machine-icon'>
            <div>
            <img class='back-img' src="image2.gif" alt='machine logo2'/>
            <img class='front-img' src="image1.png" alt='machine logo'/>
            </div>
        </div> 
        </Boxes></Link>)
    // 'state' in Link tag sends machine ID to the page that linked

    return (
        <div className="machine-container" data-testId="add-machine-box-id"> 
            {machineList} 
            <Link to='/AddMachine'>
            <Boxes className='machine-add-box' id='add-machine-btn'>
                <div>
                    <BsPlusLg className='machine-plus-icon'/>
                </div>
            </Boxes>
            </Link>

            <div className='logout-btn-div'>
            <button className='logout-btn' onClick={() => setopenModel(true)}>Logout</button>  
            {openModel && (<LogoutPopUp closeModel={() => setopenModel(false)} />)}
            </div>

        </div>
        
    )

}



export default Homepage;