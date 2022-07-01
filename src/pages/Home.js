import React from 'react';
import Boxes from '@material-ui/core/Box';

function Homepage(){
    const machines = ['Machine01', 'Machine02', 'Machine03', 'Machine04', 'Machine05', 'Machine06', 'Machine07', 'Machine08', 'Machine09', 'Machine10',
                      'Machine11', 'Machine12', 'Machine13', 'Machine14', 'Machine15', 'Machine16', 'Machine17', 'Machine18', 'Machine19', 'Machine20',
                      'Machine21', 'Machine22', 'Machine23', 'Machine24', 'Machine25']

    const machineList = machines.map(machine => <a href="/Machine" className="machine-btn"><Boxes className='machine-box'> <div>{machine}</div> </Boxes></a>)
    
    return (
            <div className="machine-container"> {machineList} </div>
    )
}


export default Homepage;