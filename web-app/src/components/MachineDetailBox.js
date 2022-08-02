import React from 'react';
import Boxes from '@material-ui/core/Box';

function MachineDetailBox() {
    return ( 
        <div>
            <Boxes className='machine-databox3'>
                <div className='machine-databox3-header'> <img src="machineIcon.png" class='mold-box-icon' alt="machine icon"/> Machine Details</div>

                <div className='image-div'>
                    <img src="3.png" alt="machine" className='machine-databox3-image'/>
                </div>

                <div className='machine-databox3-details'>
                <table className='machine-data-table'>
                <tbody>
                    <tr>
                        <td className='label-text-2'>Nozzle Temperature:</td>
                        <td>
                            <div className='temperature'>
                                <Boxes className='machine-dbox3-temp'>#1 <br/> 320 'C </Boxes>
                                <Boxes className='machine-dbox3-temp'>#2 <br/> 220 'C </Boxes>
                                <Boxes className='machine-dbox3-temp'>#3 <br/> 120 'C </Boxes>
                                <Boxes className='machine-dbox3-temp'>#4 <br/> 100 'C </Boxes>
                                {/* <Boxes className='machine-dbox3-temp'>#5</Boxes> */}
                            </div>
                        </td>
                        <td className='label-text-2'>Ejector Position:</td>
                        <td><Boxes className='machine-dbox3'></Boxes></td>
                    </tr>

                    <tr>
                        <td className='label-text-2'>Cycle Time:</td>
                        <td><Boxes className='machine-dbox3'>test</Boxes></td>
                        <td className='label-text-2'>Cooling Time:</td>
                        <td><Boxes className='machine-dbox3'></Boxes></td>
                    </tr>

                    {/* <tr>
                        <td className='label-text-2'>
                        <div className='injection-position'>
                            Injection Position: 
                        </div> 
                        </td>
                        <td><Boxes className='machine-dbox3'>Injection Position</Boxes></td>
                        <td className='label-text-2'>Cooling Time:</td>
                        <td><Boxes className='machine-dbox3'></Boxes></td>
                    </tr> */}

                </tbody>
                </table>

                <div className='injection-piston'>
                    <div className='injection-position-header'>
                        Injection Piston
                    </div>
                <table className='injection-position-table'>
                <tbody>


                    <tr>
                        <td>Actual Position:</td>
                        <td><Boxes className='injection-dbox3'>test</Boxes></td>
                    </tr>

                    <tr>
                        <td>Actual Pressure:</td>
                        <td><Boxes className='injection-dbox3'></Boxes></td>
                    </tr>

                    <tr>
                        <td>Actual Rot. Speed:</td>
                        <td><Boxes className='injection-dbox3'></Boxes></td>
                    </tr>

                </tbody>
                </table>
                </div> 
                </div>
            </Boxes>
        </div>
    );
}

export default MachineDetailBox;