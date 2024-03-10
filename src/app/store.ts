import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../features/users/usersSlice"
import chatReducer from "../features/chat/chatSlice"
import groupsReducer from "../features/groups/groupsSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    chat: chatReducer,
    groups: groupsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
