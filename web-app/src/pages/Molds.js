import React from 'react';
import {useEffect, useState} from 'react';
import Boxes from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import { GiSwordMold } from "react-icons/gi";
import MoldReportButton from '../components/MoldReportButton';
// import InputField from '../components/InputField';
// import axios from '../auth/axios';

// const ADD_MOLD_URL = '/api/mold';

function MoldsPage() {

    // const [moldID, setMoldID]=useState("");
    // const [monaNo, setMonaNo] = useState("");
    // const [material, setMaterial] = useState("");
    // const [moldMaker, setMoldMaker] = useState("");


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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(ADD_MOLD_URL, 
    //             JSON.stringify(
    //                 {
    //                     // machineID: machineId, 
    //                     moldID: moldID, 
    //                     // moldShots: moldShots, 
    //                     monaNumber: monaNo, 
    //                     material: material,
    //                     moldMaker: moldMaker
    //                 }
    //             ), 
    //             {
    //                 headers: { 'Content-Type' : 'application/json' }
    //             }
    //         );
            
    //         // When the request is success
    //         if(response?.data?.status === 201) {
    //             console.log(response?.data?.message);

    //             // Reset all the fields
    //             // setMachineId('');
    //             setMoldID('');
    //             // setMoldShots(null);
    //             setMonaNo('');
    //             setMaterial('');
    //             setMoldMaker('');
    //             // setopenModel(true);

    //             // Add popup message
    //         }

    //     } catch (error) {
    //         if(error?.response?.data?.status === 400){
    //             // Almost all the errors goes here
    //             console.log(error?.response?.data?.message);
    //         }
    //         else {
    //             console.log(error?.response?.data?.message);
    //         }

    //         // Add popup for above cases
    //     }

    // }



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
        <>
        <div className="mold-container">
             {moldList} 

            {/* <div className='add-mold-container'>
                <Boxes className='mold-box'>
                    <div className='mold-box-header'><GiSwordMold className='mold-box-icon'/> Add</div>
                    <div className='mold-form'>
                    <form onSubmit={handleSubmit}>
                    <table className='mold-add-data-table'>
                        <tbody>
                            <tr>
                                <td><label for="Mold_Id">Mold ID: </label></td>
                                <td>
                                    <InputField 
                                    type='text' 
                                    id="Mold_ID" 
                                    onChange={setMoldID}
                                    // value={machineId} 
                                    placeholder='eg: m001'/>
                                </td>
                                <td><label for="Material">Material: </label></td>
                                <td>
                                    <InputField 
                                    type='text' 
                                    id="Material" 
                                    onChange={setMaterial}
                                    // value={machineId} 
                                    placeholder='eg: carbon'/>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="Material">MONA No: </label></td>
                                <td>
                                    <InputField 
                                    type='text' 
                                    id="Material" 
                                    onChange={setMonaNo}
                                    // value={machineId} 
                                    placeholder='eg: mon001'/>
                                </td>
                                <td><label for="Material">Mold Maker: </label></td>
                                <td>
                                    <InputField 
                                    type='text' 
                                    id="Material" 
                                    onChange={setMoldMaker}
                                    // value={machineId} 
                                    placeholder='eg: USA'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        <button className='add-bt'>
                            Add
                        </button> 
                    </form>     
                    </div>

                </Boxes>
            </div> */}

            
        </div>

        <div className="mold-data-container"><MoldReportButton/></div>
        </>
    )

}

export default MoldsPage;