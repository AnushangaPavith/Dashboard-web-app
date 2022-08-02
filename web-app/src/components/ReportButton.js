import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

function ReportButton(props){
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

    // Assign data from database
    let prodCount, prodRate, failCount, startDate, endDate;
    machine.map(m => {
        prodCount = m.moldShots
        prodRate = m.prodRate
        failCount = m.failedShots
        startDate = moment(m.prod_start_date).utc().format('YYYY-MM-DD')
        endDate = moment(m.prod_end_date).utc().format('YYYY-MM-DD')
    });

    // Assign mold ID
    let moldId;
    machine.map(m => moldId = m.moldID);

     // Get mold data from the API
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

    const data = {  MachineID:machineId,
                    ProdCount:prodCount,
                    ProdRate:prodRate,
                    FailCount:failCount,
                    StartDate:startDate,
                    EndDate:endDate,
                    MoldID:moldId,
                    Material:material,
                    MonaNo:MONAno,
                    MoldMaker:moldMaker
                }

    const navigate = useNavigate();

    const navigateToReport = () => {
        //navigate to /Report
        navigate('/Report',{state:data});
    };

    return(
        <button onClick={navigateToReport} className='add-btn-div'> Generate Report</button>
    )
}

export default ReportButton;