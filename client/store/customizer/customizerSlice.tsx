import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    activeMode: string;
    activeTheme: string;
}

const initialState: StateType = {
    activeMode: "light",
    activeTheme: "BLUE",
};

type TActiveMode = "light" | "dark";
type TActiveTheme = "BLUE" | "GREEN";

export const CustomizerSlice = createSlice({
    name: "customizer",
    initialState,
    reducers: {
        setMode: (state:StateType, action: PayloadAction<TActiveMode>)=>{
            state.activeMode = action.payload;
        },
        setTheme: (state:StateType, action: PayloadAction<TActiveTheme>)=>{
            state.activeTheme = action.payload;
        },
    }
});


export const {setMode,setTheme} = CustomizerSlice.actions;
export default CustomizerSlice.reducer;