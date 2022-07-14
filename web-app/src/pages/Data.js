import React from 'react';
import {useEffect, useState} from 'react';
import Boxes from '@material-ui/core/Box';
import {Link} from 'react-router-dom';

function Data() {

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

    const moldList = molds.map(mold => <Link to="/Molds" className="mold-btn">
    <Boxes className='mold-box'>
        <div>{'Mold ' + i++}</div>
        <table className='data-table2'>
            <tbody>
                <tr>
                    <td className='myTd'>Mold ID:</td>
                    <td className='myTd'></td>
                    <td className='myTd'>material:</td>
                    <td className='myTd'></td>
                </tr>
                <tr>
                    <td className='myTd'>MONA No:</td>
                    <td className='myTd'></td>
                    <td className='myTd'>Mold Maker:</td>
                    <td className='myTd'></td>
                </tr>
            </tbody>
        </table>
    </Boxes></Link>)

    return (
        <div className="mold-container"> {moldList} </div>
    )

}

export default Data;