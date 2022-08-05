import Boxes from '@material-ui/core/Box';
import React, {useEffect, useState} from 'react';

function MachineDetailBox(props) {

     // Assign machine ID
     const machineId = props.ID

     // Get machine data from the API
     const [machine, setMachine] = useState([])
     useEffect(() => {
         if(machineId !== undefined) {
             fetch('http://localhost:3001/api/machines/'+ machineId)
             .then(results => {
                 return results.json()
             })
             .then(jsonData => {
                 setMachine(jsonData) 
             });
         }
     }, [machineId]);

    let ejectorPosition,cycleTime,coolingTime,position,pressure,rotSpeed;

    machine.map(m => {
        ejectorPosition = m.Ejector_position
        cycleTime = m.Cycle_time
        coolingTime = m.Cooling_time
        position = m.Actual_position
        pressure = m.Actual_pressure
        rotSpeed = m.Actual_rot_speed
    })
 
    return ( 
        <div data-testId="MachineDetailBox1">
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
                        <td><Boxes className='machine-dbox3'>{ejectorPosition} mm</Boxes></td>
                    </tr>

                    <tr>
                        <td className='label-text-2'>Cycle Time:</td>
                        <td><Boxes className='machine-dbox3'>{cycleTime} sec</Boxes></td>
                        <td className='label-text-2'>Cooling Time:</td>
                        <td><Boxes className='machine-dbox3'>{coolingTime} sec</Boxes></td>
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
                        <td><Boxes className='injection-dbox3'>{position} mm</Boxes></td>
                    </tr>

                    <tr>
                        <td>Actual Pressure:</td>
                        <td><Boxes className='injection-dbox3'>{pressure} bar</Boxes></td>
                    </tr>

                    <tr>
                        <td>Actual Rot. Speed:</td>
                        <td><Boxes className='injection-dbox3'>{rotSpeed} rpm</Boxes></td>
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