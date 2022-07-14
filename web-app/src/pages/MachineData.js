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

    // Assign mold ID
    let moldId;
    machine.map(m => moldId = m.moldID);
    
    return (
        <div className="machine-data-container">
            <table className='machine-data-page-table'>
                <tbody>
                    <tr>
                        <td><DataBox ID = {machineId} /></td>
                        <td><GraphBox ID = {machineId}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><MachineDetailBox ID = {machineId} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><MoldDetailBox ID = {moldId} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MachineData;