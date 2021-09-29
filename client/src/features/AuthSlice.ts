import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";
import setAuthToken from "../config/setAuthToken";
import { tokenLocalStorage } from "../config/setLocalStorage";

export interface User {
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
  dataGetUser: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  authLoading: false,
  user: null,
  dataGetUser: null,
};

export const signin = createAsyncThunk(
  "/auth/sigin",
  async (dataForm: { email: string; password: string }) => {
    try {
      const response = await axios.post<ResponseDataLogin>(
        "http://localhost:5000/v1/api/user/signin",
        dataForm
      );
      if (response.data.success) {
        tokenLocalStorage.setToken("chattoken", response.data.accessToken);
        setAuthToken(response.data.accessToken);
        console.log("ahihi");
        return response.data;
      }
    } catch (error) {
      tokenLocalStorage.deleteToken("chattoken");
      setAuthToken(null);
    }
  }
);

export const getUser = createAsyncThunk(
  "/auth/getUser",
  async (searchValue: string, thunkApi) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/v1/api/user/${searchValue}`
      );
      if (response.status === 200) {
        thunkApi.dispatch(setDataGetUser(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDataGetUser: (state, action: { type: string; payload: User | null }) => {
      state.dataGetUser = action.payload;
    },
    setNullDataGetUser: (
      state,
      action: { type: string; payload: User | null }
    ) => {
      state.dataGetUser = null;
    },
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

export const { setDataGetUser, setNullDataGetUser } = AuthSlice.actions;

export const authSelector = (state: RootState) => state.authReducer;

export default AuthSlice.reducer;
