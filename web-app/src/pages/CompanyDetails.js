import React from 'react';
import Boxes from '@material-ui/core/Box';
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";


function Company() {

    return (
        <div className="company-container"> 
            <a href='http://www.mona.lk/' target="_blank">
                <Boxes className='company-box'>
                    About Us <br/>
                    <BsFillInfoCircleFill size={70} role='svg' />
                </Boxes>
            </a>

            <Boxes className='company-box'>
                People <br/>
                <BsFillPeopleFill size={70} role='svg' />
            </Boxes>

            <Boxes className='company-box'>
                Facilities <br/>
                <FaBuilding size={70} role='svg' />
            </Boxes>

            <Boxes className='company-box'>
                Join us <br/>
                <BsPersonPlusFill size={70} role='svg' />
            </Boxes>
      
        </div>
        
    )

}



export default Company;