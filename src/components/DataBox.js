import React from 'react';
import Boxes from '@material-ui/core/Box';

function DataBox() {
    return (
        <Boxes className='mold-box'>
            <table className='data-table'>
                <tbody>
                    <tr>
                        <td>Product Count:</td>
                        <td></td>
                        <td>Product Rate:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Failed Count:</td>
                        <td></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Start Date:</td>
                        <td></td>
                        <td>End Date:</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Boxes>
    );
}

export default DataBox;