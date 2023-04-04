import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fields: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        password_conf: "",
        email: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zipcode: "",
        ski: false,
        snowboard: false,
        picture_url: ""
    }
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    handleFirstNameChange: (state, action) => {
      state.fields.first_name = action.payload;
    },
    handleLastNameChange: (state, action) => {
      state.fields.last_name = action.payload;
    },
    handleUsernameChange: (state, action) => {
      state.fields.username = action.payload;
    },
    handlePasswordChange: (state, action) => {
      state.fields.password = action.payload;
    },
    handlePasswordConfChange: (state, action) => {
      state.fields.password = action.payload;
    },
    handleEmailChange: (state, action) => {
      state.fields.email = action.payload;
    },
    handleAddress1Change: (state, action) => {
      state.fields.address_1 = action.payload;
    },
    handleAddress2Change: (state, action) => {
      state.fields.address_2 = action.payload;
    },
    handleCityChange: (state, action) => {
      state.fields.city = action.payload;
    },
    handleStateChange: (state, action) => {
      state.fields.state = action.payload;
    },
    handleZipcodeChange: (state, action) => {
      state.fields.zipcode = action.payload;
    },
    handleSkiChange: (state, action) => {
      state.fields.ski = action.payload;
    },
    handleSnowboardChange: (state, action) => {
      state.fields.snowboard = action.payload;
    },
    handlePictureUrlChange: (state, action) => {
      state.fields.picture_url = action.payload;
    },
    reset: () => initialState,
  },
});

export const { handleFirstNameChange, handleLastNameChange, handleUsernameChange, handlePasswordChange, handlePasswordConfChange, handleEmailChange, handleAddress1Change, handleAddress2Change, handleCityChange, handleStateChange, handleZipcodeChange, handleSkiChange, handleSnowboardChange, handlePictureUrlChange } = accountSlice.actions;

export default accountSlice.reducer;
