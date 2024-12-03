"use client";

import Navbar from "./ui/Navbar";
import { Button } from "@/components/ui/button";
import { decrement, increment, incrementByAmount, reset } from "@/store/counter/counterSlice";
import { setMode } from "@/store/customizer/customizerSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Box } from "@mui/material";

export default function Page() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value);
  fetch("https://localhost:7002/api/Policy")
    .then(res => res.json())
    .then(data => console.log(data));
  const themeMode = useSelector((state: AppState) => state.customizer.activeMode);
  return (
    <>
      <Navbar />
      <Box>
        {themeMode}
        <h1>Page</h1>
        <p>{value}</p>
        <button onClick={() => dispatch(setMode("dark"))}>Dark Mode</button>
        <button onClick={() => dispatch(setMode("light"))}>Light Mode</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className='m-2'>
          Increment By 5
        </button>
        <Button variant='outline' onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </Box>
    </>
  );
}
