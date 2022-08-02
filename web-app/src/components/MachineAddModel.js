import React from 'react'
import Boxes from '@material-ui/core/Box';
import {Link} from 'react-router-dom';

function MachineAddModel({closeModel}){
 
  return (
    <div className='overlay'>
    <Boxes className='pop-up-box'>
        <br />
        Machine Added <br/>
        <div className='machine-add-popup-btn'>
        <button onClick={closeModel}>Add again</button>
        <Link to='/Home'><button>Go back</button></Link>
        </div>
        
    </Boxes>
    </div>
  )
}

export default MachineAddModel