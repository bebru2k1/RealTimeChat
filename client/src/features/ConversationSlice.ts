import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";
import { User } from "./AuthSlice";

interface Messages {
  sender: User;
  message: string;
  time: Date;
}
interface Conversation {
  _id: string;
  members: User[];
  messages: Messages[];
}

// agr createConv
interface PropsCreateConv {
  members: string[];
}
// find Conv
interface ResponseFindConv {
  success: boolean;
  message: string;
  conversation: Conversation[];
}

//IinitialState
interface ConversationState {
  conversationData: Conversation[] | null;
  converLoading: boolean;
}

const initialState: ConversationState = {
  conversationData: null,
  converLoading: false,
};

//Thunk
export const createConv = createAsyncThunk(
  "/conversation/create",
  async (dataConv: PropsCreateConv) => {
    const response = await axios.post(
      "http://localhost:5000/v1/api/conversation/",
      dataConv
    );
    console.log(response.data);
  }
);

export const findConv = createAsyncThunk("/conversation/find", async () => {
  const response = await axios.get<ResponseFindConv>(
    "http://localhost:5000/v1/api/conversation/"
  );
  return response.data;
});

const ConversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findConv.pending, (state, action) => {
      state.converLoading = true;
    });
    builder.addCase(findConv.fulfilled, (state, { payload }) => {
      state.converLoading = false;
      state.conversationData = payload.conversation;
    });
    builder.addCase(findConv.rejected, (state, { payload }) => {
      state.converLoading = false;
      state.conversationData = null;
    });
  },
});

export const {} = ConversationSlice.actions;

export const conversationSelector = (state: RootState) =>
  state.conversationReducer;

export default ConversationSlice.reducer;
