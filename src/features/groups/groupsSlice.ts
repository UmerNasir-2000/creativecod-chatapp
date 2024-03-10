import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Group {
  _id: string
  title: string
  description: string
  adminId: string
  createdAt: string
  updatedAt: string
}

interface GroupState {
  groups: Group[]
  loading: boolean
}

const initialState: GroupState = {
  groups: [],
  loading: false,
}

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroup: (state) => {
      state.groups = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGroups.fulfilled, (state, action) => {
      state.groups = action.payload
      state.loading = false
    })
    builder.addCase(fetchGroups.rejected, (state) => {
      state.groups = []
      state.loading = false
    })
    builder.addCase(fetchGroups.pending, (state) => {
      state.loading = true
    })
  },
})

export const fetchGroups = createAsyncThunk("groups/fetchGroups", async () => {
  const response = await fetch("http://localhost:5000/groups")

  if (!response.ok) {
    throw new Error("Failed to fetch groups")
  }

  return response.json() as Promise<Group[]>
})

export const { setGroup } = groupsSlice.actions

export default groupsSlice.reducer
