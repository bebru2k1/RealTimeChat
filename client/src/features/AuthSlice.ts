import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";

interface User {
  email: string;
  image: string;
  _id: string;
  __v: number;
}
interface ResponseDataLogin {
  success: boolean;
  accessToken: string;
  message: string;
  userObject: User;
}

interface AuthState {
  isAuthenticated: boolean;
  authLoading: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  authLoading: false,
  user: null,
};

export const signin = createAsyncThunk(
  "/auth/sigin",
  async (dataForm: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/user/signin",
        dataForm
      );
      console.log(response.data);
      return response.data as ResponseDataLogin;
    } catch (error) {}
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<any>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state, action) => {
      state.authLoading = true;
    });
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.authLoading = false;
      state.user = payload?.userObject as User;
      state.isAuthenticated = true;
    });
    builder.addCase(signin.rejected, (state, { payload }) => {
      state.authLoading = false;
      state.user = null;
    });
  },
});

export const { getUser } = AuthSlice.actions;

export const authSelector = (state: RootState) => state.authReducer;

export default AuthSlice.reducer;
