import React from 'react';
import DataBox from '../components/DataBox';
import GraphBox from '../components/GraphBox';
import MachineDetailBox from '../components/MachineDetailBox';
import MoldDetailBox from '../components/MoldDetailBox';

function MachineData() {

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