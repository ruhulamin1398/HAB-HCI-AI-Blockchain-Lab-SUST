import { createSlice, nanoid } from "@reduxjs/toolkit"



const initialState = {
    projects:[
        {
            id:1 , 
            title: "project 1 ", 
            members:{
               id: 1212,
               link: "#" 
            }
        }
    ]
}





export const projectSlice= createSlice({
    name: 'project',
    initialState,
    reducers: {
        addProject: (state , action) =>{
            const project = {
                id: nanoid(),
                title: action.payload,
                // members: action.payload,
                members: {}
            }
            state.projects.push(project)

        }
    }
})


export const { addProject} = projectSlice.actions
export default projectSlice.reducer