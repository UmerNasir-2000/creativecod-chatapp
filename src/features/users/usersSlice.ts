import { createSlice } from "@reduxjs/toolkit"

interface UserState {
  users: any[]
}

const initialState: UserState = {
  users: [],
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state) => {
      state.users = []
    },
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
