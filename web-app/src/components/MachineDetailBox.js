import React from 'react';
import Boxes from '@material-ui/core/Box';

function MachineDetailBox() {
    return ( 
        <div>
            <Boxes className='machine-databox3'>
                <div className='machine-databox3-header'> <img src="machineIcon.png" class='mold-box-icon' alt="machine icon"/> Machine Details</div>
            </Boxes>
        </div>
    );
}

export default MachineDetailBox;