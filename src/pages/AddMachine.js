import React from 'react';
import Boxes from '@material-ui/core/Box';
import InputField from '../components/InputField';

 function AddNewMachine() {
//     const [id, setid]=useState("");
//     const [num, setnum]=useState("");
//     const [mat, setmat]=useState("");
//     const [mak, setmak]=useState("");
//     const history = useHistory();

//     useEffect(() =>{
//     if(localStorage.getItem('user-info')){
//         history.push("/Home")
//     }

//    }, [])

    //async function login(){
    //     console.warn(id, num, mat, mak);
    //     let item={id, num, mat, mak};
    //     let result = await fetch('http://localhost:3001/api/molds', {
    //         method: 'POST',
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Accept":"application/json",
    //         },
    //         body:JSON.stringify(item)
    //     });

    //     result = await result.json();
    //     localStorage.setItem("user-info", JSON.stringify(result));
    //     history.push("/Home");
    // }

    return ( 
        <div className='new-machine-container'>
            <h1>Sample page...</h1>
            <Boxes className='new-machine-box'>
                <div>
                    <form>
                        <label for="input1">Input1</label> <br/>
                        <InputField type='text' placeholder='Input1'/><br/>

                        <label for="input2">Input2</label><br/>
                        <InputField type='text' placeholder='Input2'/><br/>

                        <label for="input3">Input3</label><br/>
                        <InputField type='text' placeholder='Input3'/><br/>

                        <label for="input3">Input4</label><br/>
                        <InputField type='text' placeholder='Input4'/><br/>
                        
                        <div className='add-btn-div'>
                        <input type="submit" value="ADD"/>
                        </div>
                        

                    </form>
                </div>
            </Boxes>
        </div>
    );
}

export default AddNewMachine;