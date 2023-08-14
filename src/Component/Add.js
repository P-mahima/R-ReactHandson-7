import React from 'react'


import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import {addData} from "./slice"


const Add = () => {
 
    const dispatch = useDispatch();
    const nav = useNavigate();
    const newObj = {
        name: "",
        age: "",
        course: "",
        batch: ""
    }

    const HandleCan=()=>{
        nav (-1)
    }
    const HandleS = () => {
        dispatch(addData(newObj))
        nav(-1);
    }
    const HandleC = (e) => {
        newObj[e.target.name] = e.target.value;

    }

    return (
        <>

            <div className='location'>
                <div className='left'>
                    <label> Name:  <input className='imput-box' name="name" onChange={HandleC} placeholder='Entre name'></input>
                    </label>
                    <label> Age: <input className='imput-box' name="age" onChange={HandleC} placeholder='Entre age'  ></input>
                    </label>
                </div>

                <div className='left'>
                    <label>Course:  <input className='imput-box' name="course" onChange={HandleC} placeholder='Entre course' ></input>
                    </label>
                    <label>Batch:   <input className='imput-box' name="batch" onChange={HandleC} placeholder='Entre batch'></input>

                    </label>
                </div>
            </div>
            <div className='right'>
                <button onClick={HandleS}>Submit</button>
                <button onClick={HandleCan}>Cancel</button>
            </div>


        </>
    )
}

export default Add;