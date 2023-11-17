import { createSlice, nanoid } from "@reduxjs/toolkit"



const initialState = {
    projects:[
        {
            id:1 , 
            title: "project 1 ", 
            test: 'test',
            members:{
                id: 1212,
                name: 'hello',
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
                title: action.payload.title,
                test: action.payload.test,
                // members: action.payload,
                members: action.payload.member
            }
            state.projects.push(project)

        }
    }
})


export const { addProject} = projectSlice.actions
export default projectSlice.reducer