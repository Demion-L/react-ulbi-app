import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

export interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
