import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface User {
  _id: string
  status: string
  receiverId: string
  senderId: {
    _id: string
    name: string
    email: string
  }
  createdAt: string
  updatedAt: string
}

interface UserState {
  users: User[]
  loading: boolean
}

const initialState: UserState = {
  users: [],
  loading: false,
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state) => {
      state.users = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false
    })
    builder.addCase(fetchChatUsers.rejected, (state) => {
      state.users = []
      state.loading = false
    })
    builder.addCase(fetchChatUsers.pending, (state) => {
      state.loading = true
    })
  },
})

export const fetchChatUsers = createAsyncThunk(
  "users/fetchChatUsers",
  async () => {
    const response = await fetch(
      "http://localhost:5000/users/chat?receiverId=65418f2a6b14eabfbbe2cfde"
    )

    if (!response.ok) {
      throw new Error("Failed to fetch chat users")
    }

    return response.json() as Promise<User[]>
  }
)

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
