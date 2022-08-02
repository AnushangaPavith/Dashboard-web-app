import React from "react";
import Pdf from "react-to-pdf";
import { useLocation } from 'react-router-dom';
import { SiReactos } from "react-icons/si";
import Boxes from '@material-ui/core/Box';
import { PieChart } from "react-minimal-pie-chart";
import { Grid } from "@material-ui/core/";

const ref = React.createRef();

const PDF = (props) =>{
    const { state } = useLocation();
    const { MachineID,ProdCount,ProdRate,FailCount,StartDate,EndDate,MoldID,Material,MonaNo,MoldMaker} = state;

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const pieData = [
        { title: "Succeeded count", value: ProdCount-FailCount, color: "#6A2135" },
        { title: "Failed count", value: FailCount, color: "#C13C37" }
    ];

    return(
        <>
            <div className="post" ref={ref}>
            <div className="company-header"><SiReactos /> Company Name</div>
            <div className="report-header">Machine Statistics Report</div>
            <div className="date">Generated for:{date} </div>
            <div className="machine-id">Machine ID : {MachineID}</div>
            <div className="report-sub-header">Machine Details </div>
            
            <div>
                <table className='report-data-table'>
                <tbody>
                    <tr>
                        <td className='label-report'>Product Count:</td>
                        <td><Boxes className='report-box1-numbers'>{ProdCount}</Boxes></td>
                        <td className='label-report'>Start Date:</td>
                        <td><Boxes className='report-box1-numbers'>{StartDate}</Boxes></td>
                    </tr>
                    <tr>
                        <td className='label-report'>Failed Count:</td>
                        <td><Boxes className='report-box1-numbers'>{FailCount}</Boxes></td>
                        <td className='label-report'>End Date:</td>
                        <td><Boxes className='report-box1-numbers'>{EndDate}</Boxes></td>
                    </tr>
                    <tr>
                        <td className='label-report'>Product Rate:</td>
                        <td><Boxes className='report-box1-numbers'>{ProdRate}</Boxes></td>
                        <td className='label-report'>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="report-sub-header">Mold Details</div>
            <div>
                <table className='report-data-table'>
                <tbody>
                    <tr>
                        <td className='label-report'>Mold ID:</td>
                        <td><Boxes className='report-box1-numbers'>{MoldID}</Boxes></td>
                        <td className='label-report'>Material:</td>
                        <td><Boxes className='report-box1-numbers'>{Material}</Boxes></td>
                    </tr>
                    <tr>
                        <td className='label-report'>MONA number:</td>
                        <td><Boxes className='report-box1-numbers'>{MonaNo}</Boxes></td>
                        <td className='label-report'>MoldMaker:</td>
                        <td><Boxes className='report-box1-numbers'>{MoldMaker}</Boxes></td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
            <Pdf targetRef={ref} filename="report.pdf">
                {({toPdf})=><button className='pdf-btn' onClick={toPdf}>Download pdf</button>}
            </Pdf>
        </>
    );
}

export default PDF;