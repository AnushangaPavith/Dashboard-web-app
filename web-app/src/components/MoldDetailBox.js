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
        <Boxes className='machine-box4' data-testId="DetailBox1">
            <table className='machine-data-table'>
                <tbody>
                    <tr>
                        <td className='label-text-2'>Mold ID:</td>
                        <td><Boxes className='machine-databox4'>{moldId}</Boxes></td>
                        <td className='label-text-2'>Material:</td>
                        <td><Boxes className='machine-databox4'>{material}</Boxes></td>
                    </tr>
                    <tr>
                        <td className='label-text-2'>MONA No:</td>
                        <td><Boxes className='machine-databox4'>{MONAno}</Boxes></td>
                        <td className='label-text-2'>Mold Maker:</td>
                        <td><Boxes className='machine-databox4'>{moldMaker}</Boxes></td>
                    </tr>
                </tbody>
            </table>
        </Boxes>
    );
}

export default MoldDetailBox;