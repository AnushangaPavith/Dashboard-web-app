import React from 'react';
import Boxes from '@material-ui/core/Box';

function MoldsPage() {
    const Molds = ['Mold01', 'Mold02', 'Mold03', 'Mold04', 'Mold05', 'Mold06', 'Mold07']

    const MoldList = Molds.map(machine => <a href="/Molds" class="mold-btn">
    <Boxes className='mold-box'>
        <div>{machine}</div>
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
    </Boxes></a>)
    
    return <div className="mold-container"> {MoldList} </div>
}

export default MoldsPage;