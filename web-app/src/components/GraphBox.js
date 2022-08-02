import React, {useEffect, useState} from 'react';
import Boxes from '@material-ui/core/Box';
import { PieChart } from "react-minimal-pie-chart";
import { Grid } from "@material-ui/core/";

function GraphBox(props) {
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
    let prodCount, failCount;
    machine.map(m => {
        prodCount = m.moldShots
        failCount = m.failedShots
    });

    const pieData = [
        { title: "Succeeded count", value: prodCount-failCount, color: "#C13C37" },
        { title: "Failed count", value: failCount, color: "#FF6900" }
    ];

    return ( 
        <div>
            <Boxes className='mold-box'>
                <Grid container justifyContent='center'>
                <Grid item xs={6}>
                    <PieChart
                        center={[40, 40]}
                        data={pieData}
                        lengthAngle={360}
                        lineWidth={50}
                        paddingAngle={0}
                        radius={40}
                        startAngle={0}
                        viewBoxSize={[100, 100]}
                    />
                </Grid>
                <Grid>
                    <br></br>
                    <ul>
                        <li key={"Succeeded count"}>
                        <span
                            style={{ backgroundColor: "#C13C37"}}
                            className={"ChartLegend"}
                        ></span>
                        <b > Succeeded count :{prodCount-failCount}</b>
                        </li>
                        <li key={"Failed count"}>
                        <span
                            style={{ backgroundColor: "#FF6900"}}
                            className={"ChartLegend"}
                        ></span>
                        <b> Failed count : {failCount}</b>
                        </li>
                        
                    </ul>
                </Grid>
                </Grid>
            </Boxes>
        </div>
    );
}

export default GraphBox;