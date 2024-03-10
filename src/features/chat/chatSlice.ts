import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { User } from "../users/usersSlice"

interface Message {
  _id: string
  text: string
  senderId: string
  receiverId: string
  createdAt: string
  updatedAt: string
}

interface ChatState {
  currentChat: User | null
  messages: Message[]
}

const initialState: ChatState = {
  currentChat: null,
  messages: [],
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<User>) => {
      state.currentChat = action.payload
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatMessages.fulfilled, (state, action) => {
      state.messages = action.payload
    })
  },
})

export const fetchChatMessages = createAsyncThunk(
  "chat/fetchChatMessages",
  async () => {
    const response = await fetch(
      "http://localhost:5000/chatMessages?receiverId=65418f2a6b14eabfbbe2cfde&senderId=651360e4feb2f73c71d49bfa"
    )
    if (!response.ok) {
      throw new Error("Failed to fetch chat messages")
    }
    return response.json() as Promise<Message[]>
  }
)

export const { setChat } = chatSlice.actions

export default chatSlice.reducer
