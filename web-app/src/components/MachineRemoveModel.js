import React from 'react'
import Boxes from '@material-ui/core/Box';
// import {Link, useNavigate} from 'react-router-dom';

function MachineAddModel({removeMachine, closeModel}){

  return (
    <div className='overlay-remove'>
    <Boxes className='pop-up-box-remove'>
        <br />
        Are you sure you want to delete this machine?<br/>
        <div className='machine-remove-popup-btn'>
            <button onClick={removeMachine}>Yes</button>
            <button onClick={closeModel}>No</button>
        </div>
        
    </Boxes>
    </div>
  )
}

export default MachineAddModel