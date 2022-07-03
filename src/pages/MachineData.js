import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import DataBox from '../components/DataBox';
import GraphBox from '../components/GraphBox';
import MachineDetailBox from '../components/MachineDetailBox';
import MoldDetailBox from '../components/MoldDetailBox';

function MachineData(props) {

    // Read sent machineID from homepage
    const data = useLocation().state;
    const machineId = data.id;

    // Get mold ID from API
    const [machine, setMachine] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/machines/'+ machineId)
        .then(results => {
            return results.json()
        })
        .then(jsonData => {
            setMachine(jsonData) 
        });

    }, [machineId]);

    let moldId;
    machine.map(m => moldId = m.moldID);
    console.log(moldId);
    
    return (
        <div className="machine-data-container">
            <div className='two-grid'>
                <DataBox />
                <GraphBox />
            </div>
            <MachineDetailBox />
            <MoldDetailBox />
        </div>
    )
}

export default MachineData;