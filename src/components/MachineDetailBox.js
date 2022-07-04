import React from 'react';
import Boxes from '@material-ui/core/Box';

function MachineDetailBox(props) {
    const machineId = props.ID


    return ( 
        <div>
            <Boxes className='detail-box2'>
                <div><b>Machine Details</b></div>
            </Boxes>
        </div>
    );
}

export default MachineDetailBox;