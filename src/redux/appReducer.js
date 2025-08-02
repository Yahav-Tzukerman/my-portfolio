import { createReducer } from "@reduxjs/toolkit";
import { restoreStateSuccess } from "../redux/actions/appActions";

const initialState = {
  darkMode: true,
  lang: "en",
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(restoreStateSuccess, (state, action) => {
      return { ...state, ...action.payload }; // Merge restored state
    })
    .addCase("TOGGLE_THEME", (state) => {
      state.darkMode = !state.darkMode;
    })
    .addCase("TOGGLE_LANGUAGE", (state, action) => {
      state.lang = action.payload;
    });
});

export const toggleTheme = () => ({
  type: "TOGGLE_THEME",
});

export const toggleLanguage = (lang) => ({
  type: "TOGGLE_LANGUAGE",
  payload: lang,
});

export default appReducer;
