import { createSlice, nanoid } from "@reduxjs/toolkit"
import { peoplesList } from "./peopleList"

const initialState = {
    peoples: peoplesList
}

 
export const peopleSlice = createSlice(
 {
    name: 'people',
    initialState,
    reducers:{
        addPeople: (state, action) => {
            // const people = {
            //     id: nanoid(), 
            //     text: action.payload
            // }
            // state.peoples.push(people)
        },
        removePeople: (state, action) => {
            // state.peoples = state.peoples.filter((people) => people.id !== action.payload )
        },

    }
 }
)

export const {addPeople,removePeople} = peopleSlice.actions

export default peopleSlice.reducer