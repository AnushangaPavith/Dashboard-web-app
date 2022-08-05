import React from 'react';
import Boxes from '@material-ui/core/Box';
import InputField from '../components/InputField';
import Model from '../components/MachineAddModel';
import { useState, useEffect  } from 'react';
import axios from '../auth/axios';

const ADD_MACHINE_URL = '/api/init';

function AddNewMachine() {
    const [machineId, setMachineId]=useState("");
    const [moldID, setMoldID]=useState("");
    const [moldShots, setMoldShots] = useState(null);
    const [monaNo, setMonaNo] = useState("");
    const [material, setMaterial] = useState("");
    const [moldMaker, setMoldMaker] = useState("");
    const [moldsData, setMoldsData] = useState([]);
    const [openModel, setopenModel] = useState(false);

    // Fetch mold list from db
    useEffect(() => {
        fetch('http://localhost:3001/api/molds')
        .then(results => {
            return results.json()
        })
        .then(jsonData => {
            setMoldsData(jsonData) 
        });
    }, []);

    // Create an array to select mold from available list
    const menuItems = moldsData.map(mold => <option value={mold.moldID}>{mold.moldID}</option>);

    // When a mold is selected, the Mold data will be automatically filled
    const twoFunctions = (e) => {
        setMoldID(e);

        // Find selected mold in molds list and assign values to relevant states
        let selectedMold = moldsData.find(mold => mold.moldID === e);
        if(selectedMold !== undefined) {
            setMonaNo(selectedMold.monaNumber);
            setMaterial(selectedMold.material);
            setMoldMaker(selectedMold.moldMaker);
        }
    }

    // Submit event
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(ADD_MACHINE_URL, 
                JSON.stringify(
                    {
                        machineID: machineId, 
                        moldID: moldID, 
                        moldShots: moldShots, 
                        monaNumber: monaNo, 
                        material: material,
                        moldMaker: moldMaker
                    }
                ), 
                {
                    headers: { 'Content-Type' : 'application/json' }
                }
            );
            
            // When the request is success
            if(response?.data?.status === 201) {
                console.log(response?.data?.message);

                // Reset all the fields
                setMachineId('');
                setMoldID('');
                setMoldShots(null);
                setMonaNo('');
                setMaterial('');
                setMoldMaker('');
                setopenModel(true);

                // Add popup message
            }

        } catch (error) {
            if(error?.response?.data?.status === 400){
                // Almost all the errors goes here
                console.log(error?.response?.data?.message);
            }
            else {
                console.log(error?.response?.data?.message);
            }

            // Add popup for above cases
        }

    }

    return (
        <div className='new-machine-container' data-testId="add-machine">
            <Boxes className='new-machine-box'>
                <div>
                    <form onSubmit={handleSubmit} >
                        <label for="Machine_ID">Machine ID</label> <br/>
                        <InputField 
                        type='text' 
                        id="Machine_ID" 
                        onChange={setMachineId}
                        value={machineId} 
                        placeholder='eg: D01'/>
                        
                        <br/>

                        <label for="Mold_ID">Mold ID</label><br/>
                        <input 
                        list='moldList' 
                        id="Mold_ID" 
                        className='input' 
                        onChange={(e) => twoFunctions(e.target.value)} 
                        autoComplete = 'off'
                        value={moldID}
                        placeholder='eg: m001'>
                        </input>
                        <datalist id="moldList">
                            {menuItems}
                        </datalist>
                        
                        <br/>
                        <br/>

                        <label for="Mold_Shots">Mold Shots</label><br/>
                        <InputField 
                        type='number' 
                        id="Mold_Shots" 
                        onChange={setMoldShots} 
                        value={moldShots} 
                        placeholder='Mold Shots'/>

                        <br/>

                        <label for="Mona_Number">Mona Number</label><br/>
                        <InputField 
                        type='text' 
                        id="Mona_Number" 
                        onChange={setMonaNo} 
                        value={monaNo} 
                        placeholder='eg: mona001'/>
                        
                        <br/>

                        <label for="Material">Material</label><br/>
                        <InputField 
                        type='text' 
                        id="Material" 
                        onChange={setMaterial} 
                        value={material} 
                        placeholder='Material'/>
                        
                        <br/>

                        <label for="Mold_Maker">Mold Maker</label><br/>
                        <InputField 
                        type='text' 
                        id="Mold_Maker" 
                        onChange={setMoldMaker} 
                        value={moldMaker} 
                        placeholder='Mold Maker'/>
                        
                        <br/>
                        
                        {/* <div className='btn'> */}
                        {/* <input type="submit" value="ADD"/> */}
                        {/* </div> */}

                        <button className='add-btn-div' id='add-machine-submit'>
                            Add
                        </button> 
                        
                    </form>
                </div>
            </Boxes>

            {openModel && (<Model closeModel={() => setopenModel(false) }/>)}  

        </div>
        
    );
}

export default AddNewMachine;