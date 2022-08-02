import React from 'react';
import {useEffect, useState} from 'react';
import Boxes from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import { GiSwordMold } from "react-icons/gi";
import MoldReportButton from '../components/MoldReportButton';

function MoldsPage() {

    const [molds, setMolds] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/molds')
        // fetch('/api/molds')   // This line suppose to work with setupProxy.js file. but it doesn't. So the above line works fine
        .then(results => {
            return results.json()
        })
        .then(jsonData => {
            setMolds(jsonData) 
        });

    }, []);

    let i = 1;

    const moldList = molds.map(mold => <Link to="/Molds">
    <Boxes className='mold-box'>
        <div className='mold-box-header'><GiSwordMold className='mold-box-icon'/> {'Mold ' + i++} </div>
        <table className='mold-data-table'>
            <tbody>
                <tr>
                    <td>Mold ID:</td>
                    <td><Boxes className='mold-box-numbers'>{mold.moldID}</Boxes></td>
                    <td>Material:</td>
                    <td><Boxes className='mold-box-data'>{mold.material}</Boxes></td>
                </tr>
                <tr>
                    <td>MONA No:</td>
                    <td><Boxes className='mold-box-numbers'>{mold.monaNumber}</Boxes></td>
                    <td>Mold Maker:</td>
                    <td><Boxes className='mold-box-data'>{mold.moldMaker}</Boxes></td>
                </tr>
            </tbody>
        </table>
    </Boxes></Link>)

    return (
        <div>
            <div className="mold-container"> {moldList} </div>
            <div className="mold-data-container"><MoldReportButton/></div>
        </div>
    )

}

export default MoldsPage;