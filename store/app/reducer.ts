import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState, AppTheme, AppUser } from "./types";

const initialState: AppState = {
    user: {
        name: "Vlad",
        email: "vlad@gmail.com",
        nickname: "vladislav124352",
        surname: "Polishchuk"
    },
    // user: null,
    theme: "system",
}

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        /**
         * The application reducer that sets the application user to redux store
         * @param state AppState
         * @param action AppUser
         */
        setAppUser: (state, action: PayloadAction<AppUser>) => {
            state.user = action.payload;
        },
        /**
         * The application reducer that sets the application theme to redux store
         * @param state AppState
         * @param action AppTheme
         */
        setAppTheme: (state, action: PayloadAction<AppTheme>) => {
            state.theme = action.payload;
        }
    }
})

/**
 * The global application reducer
 */
export const appReducer = slice.reducer;
/**
 * The global application actions
 */
export const appActions = slice.actions;