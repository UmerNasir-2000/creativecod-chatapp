import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../users/usersSlice"

interface ChatState {
  currentChat: any | null
}

const initialState: ChatState = {
  currentChat: null,
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<User>) => {
      state.currentChat = action.payload
    },
  },
})

export const { setChat } = chatSlice.actions

export default chatSlice.reducer
