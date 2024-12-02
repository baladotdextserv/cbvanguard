"use client";
import { useDispatch, useSelector } from "@/store/hooks";
import { increment } from "@/store/counter/counterSlice";

export default function Page() {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);

    return (
        <div>
            <h1>Page</h1>
            <p>{value}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
}
