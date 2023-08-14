import { createSlice } from "@reduxjs/toolkit";

const StudentDataSlice = createSlice({
    name: 'StudentDataSlice',
    initialState: [
    {
       
        name: "Elent",
        age: 24,
        course: "MERN",
        batch: "November"
    },
    {
       
        name: "John",
        age: "24",
        course: "MERN",
        batch: "October"
    },
    {
        
        name: "Doe",
        age: "25",
        course: "MERN",
        batch: "November"
    },
    {
       
        name: "Biden",
        age: "26",
        course: "MERN",
        batch: "September"
    },
    {
 
        name: "Barar",
        age: "22",
        course: "MERN",
        batch: "September"
    },
    {

        name: "Christ",
        age: 23,
        course: "MERN",
        batch: "October"
    }],
    reducers:
    {
        editData: (state, action) => {
            state[action.payload.loc] = action.payload.currData;
            console.log(state)
            return (state)
        },
        addData: (state, action) => {
            state[state.length] = action.payload;
            return (state)
        }

    }
})

export const { editData, addData } = StudentDataSlice.actions;
export default StudentDataSlice.reducer;