import React from 'react'
import Boxes from '@material-ui/core/Box';
import Logout from './LogoutBtn';
// import {Link, useNavigate} from 'react-router-dom';

function LogoutPopUp( {closeModel} ){

  return (
    <div className='overlay-logout'>
    <Boxes className='pop-up-box-logout'>
        <br />
        Do you want to Logout?<br/>
        <div className='machine-add-popup-btn'>
            <button onClick={ Logout() }>Yes</button>
            <button onClick= { closeModel } >No</button>
        </div>
        
    </Boxes>
    </div>
  )
}

export default LogoutPopUp