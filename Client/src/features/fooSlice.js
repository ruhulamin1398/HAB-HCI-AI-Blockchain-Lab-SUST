import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foos: [
    {
      project: false,
      publication: false,
      people: false,
    },
  ],
};

export const fooSlice = createSlice({
  name: "foo",
  initialState,
  reducers: {
    updateFoo: (state, action) => {
      console.log(action.payload);
      state.foos[0].project = true;
    },
  },
});

export const { updateFoo } = fooSlice.actions;
export default fooSlice.reducer;
