import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editData } from './slice';

const Edit = () => {

    const dispatch = useDispatch();
    const nav = useNavigate();
   
    const Life = useSelector((state) => state.dataKey);


    const loc = useLocation().state.data

    const currData = {
        name: Life[loc].name,
        age: Life[loc].age,
        course: Life[loc].course,
        batch: Life[loc].batch,
    }

    const handlechange = (e) => {
        currData[e.target.name] = e.target.value;
    }

    const HandleSubmit = () => {
        dispatch( editData({currData,loc}));
        nav(-1);
    }
 
    return (
        <>

            <div className='location'>
                <div className='left'>
                <label> Name:  <input className='imput-box' name="name" onChange={handlechange} placeholder={Life[loc].name}></input>
                </label>
                <label> Age: <input className='imput-box' name="age" onChange={handlechange} placeholder={Life[loc].age} ></input>
                </label>
                </div>

                <div className='left'>
                <label>Course:  <input className='imput-box' name="course" onChange={handlechange} placeholder={Life[loc].course}></input>
                </label>
                <label>Batch:   <input className='imput-box' name="batch" onChange={handlechange} placeholder={Life[loc].batch}></input>

                </label>
                </div>
            </div>
            <div className='right'>
            <button onClick={HandleSubmit}>Update</button>
            <br></br>
            <button onClick={() => { nav('/student') }}>Cancel</button>
            </div>
        </>
    )
}

export default Edit