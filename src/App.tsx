import React from "react";

import "./App.css";
import { userSlice } from "./store/reducers/UserSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

function App() {
  const { count } = useAppSelector((state) => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className='App'>
      <h1 className='bg-indigo-600 text-lg text-slate-50'>Hello world</h1>
    </div>
  );
}

export default App;
