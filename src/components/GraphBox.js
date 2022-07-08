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
        { title: "Succeeded count", value: prodCount-failCount, color: "#6A2135" },
        { title: "Failed count", value: failCount, color: "#C13C37" }
    ];

    return ( 
        <div>
            <Boxes className='machine-databox1'>
                <Grid container justifyContent='center'>
                <Grid item xs={6}>
                    <PieChart
                        center={[50, 50]}
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
                    <ul>
                        <li key={"Suceeded count"}>
                        <span
                            style={{ backgroundColor: "#6A2135"}}
                            className={"ChartLegend"}
                        ></span>
                        <b>{"Suceeded count"}:</b> {prodCount-failCount}
                        </li>
                        <li key={"Failed count"}>
                        <span
                            style={{ backgroundColor: "#C13C37"}}
                            className={"ChartLegend"}
                        ></span>
                        <b>{"Failed count"}:</b> {failCount}
                        </li>
                        
                    </ul>
                </Grid>
                </Grid>
            </Boxes>
        </div>
    );
}

export default GraphBox;