import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64512e9be1f6f1bb22aa663b.mockapi.io/database";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/users");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
