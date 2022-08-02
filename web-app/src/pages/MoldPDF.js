import React from "react";
import Pdf from "react-to-pdf";
import { SiReactos } from "react-icons/si";
import {useEffect, useState} from 'react';

const ref = React.createRef();

const PDF = (props) =>{

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

    
    let i = 1;

    function addData(mold){
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = i++;
        cell2.innerHTML = mold.moldID;
        cell3.innerHTML = mold.material;
        cell4.innerHTML = mold.monaNumber;
        cell5.innerHTML = mold.moldMaker;
    }

    const moldList = molds.map(mold =>
        addData(mold)
    )

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return(
        <>
        <div className="post" ref = {ref}>
            <div className="company-header"><SiReactos /> Company Name</div>
            <div className="report-header">Mold Statistics Report</div>
            <div className="date">Generated for:{date} </div>
            <div>
                <table class="moldTable" id="myTable">
                    <tbody>
                    <tr>
                        <th>Index</th>
                        <th>Mold ID</th>
                        <th>Material</th>
                        <th>MONA No</th>
                        <th>Mold Maker</th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>{moldList}</div>
        </div>
        <Pdf targetRef={ref} filename="Moldreport.pdf">
            {({ toPdf }) => <button className='pdf-btn' onClick={toPdf}>Download pdf</button>}
        </Pdf></>
    
    );

}

export default PDF;