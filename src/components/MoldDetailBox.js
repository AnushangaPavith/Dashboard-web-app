import React from 'react';
import Boxes from '@material-ui/core/Box';

function MoldDetailBox() {
    return ( 
        <Boxes className='detail-box2'>
            <table className='data-table'>
                <tbody>
                    <tr>
                        <td>Mold ID:</td>
                        <td></td>
                        <td>material:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MONA No:</td>
                        <td></td>
                        <td>Mold Maker:</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Boxes>
    );
}

export default MoldDetailBox;