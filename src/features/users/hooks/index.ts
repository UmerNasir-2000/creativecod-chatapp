import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchChatUsers } from "../usersSlice"

export const useChatUsers = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.users.users)

  useEffect(() => {
    dispatch(fetchChatUsers())
  }, [])

  return users
}
