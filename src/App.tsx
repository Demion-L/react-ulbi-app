import React from "react";

import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='App'>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      <div>{JSON.stringify(users, null, 2)}</div>
    </div>
  );
}

export default App;
