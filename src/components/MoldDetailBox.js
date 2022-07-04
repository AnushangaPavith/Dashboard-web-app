import React, {useEffect, useState} from 'react';
import Boxes from '@material-ui/core/Box';

function MoldDetailBox(props) {

    const moldId = props.ID
    const [molds, setMolds] = useState([])

    useEffect(() => {
        if(moldId !== undefined) {
            fetch('http://localhost:3001/api/molds/' + moldId)
            .then(results => {
                return results.json()
            })
            .then(jsonData => {
                setMolds(jsonData) 
            });
        }
    }, [moldId]);

    // Assign data from database
    let material, MONAno, moldMaker;
    molds.map(mo => {
        material = mo.material
        MONAno = mo.monaNumber
        moldMaker = mo.moldMaker
    });

    return ( 
        <Boxes className='detail-box2'>
            <table className='data-table'>
                <tbody>
                    <tr>
                        <td>Mold ID:</td>
                        <td>{moldId}</td>
                        <td>material:</td>
                        <td>{material}</td>
                    </tr>
                    <tr>
                        <td>MONA No:</td>
                        <td>{MONAno}</td>
                        <td>Mold Maker:</td>
                        <td>{moldMaker}</td>
                    </tr>
                </tbody>
            </table>
        </Boxes>
    );
}

export default MoldDetailBox;