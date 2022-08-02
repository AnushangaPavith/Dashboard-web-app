import {useNavigate} from 'react-router-dom';

function MoldReportButton(){

    const navigate = useNavigate();

    const navigateToReport = () => {
        //navigate to /Report
        navigate('/MoldReport');
    };

    return (
        <button onClick={navigateToReport} className='add-btn-div'> Generate Report</button>
    )
}

export default MoldReportButton;