import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    user: undefined,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("Store user", action.payload);
      state.user = {
        id: action.payload.id,
        token: action.payload.token,
        name: action.payload.name,
        surname: action.payload.surname,
        address: action.payload.address,
        mail: action.payload.mail,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = user.actions;

export default user.reducer;
