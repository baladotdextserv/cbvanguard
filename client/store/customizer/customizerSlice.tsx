import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  activeMode: string;
  activeTheme: string;
  borderRadius: number;
  isCardShadow?: boolean;
}

type TActiveMode = "light" | "dark";
type TActiveTheme = "GREEN_THEME" | "BLUE_THEME";

const initialState: StateType = {
  activeMode: "light",
  activeTheme: "GREEN_THEME",
  borderRadius: 7,
  isCardShadow: true,
};

export const CustomizerSlice = createSlice({
  name: "customizer",
  initialState,
  reducers: {
    setMode: (state: StateType, action: PayloadAction<TActiveMode>) => {
      state.activeMode = action.payload;
    },
    setTheme: (state: StateType, action: PayloadAction<TActiveTheme>) => {
      state.activeTheme = action.payload;
    },
    setCardShadow: (state: StateType, action) => {
      state.isCardShadow = action.payload;
    },
  },
});

export const { setMode, setTheme } = CustomizerSlice.actions;
export default CustomizerSlice.reducer;
