import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { setChat } from "../../../features/chat/chatSlice"

const UserList = () => {
  const users = useAppSelector((state) => state.users.users)
  const currentChat = useAppSelector((state) => state.chat.currentChat)

  const dispatch = useAppDispatch()

  return (
    <section className='text-white text-xs'>
      {users.map((user) => (
        <article
          key={user._id}
          className={`px-3 py-2 pb-4 mb-4 border-b border-gray-300 cursor-pointer hover:bg-slate-900 transition-colors duration-300 ease-in-out ${
            currentChat?._id === user._id
              ? "bg-slate-900"
              : "hover:opacity-70 transition-opacity"
          }`}
          onClick={() => {
            dispatch(setChat(user))
          }}
        >
          <div className='flex items-center gap-x-3'>
            <div className='text-lg bg-slate-700 rounded-full h-12 w-12 flex items-center justify-center'>
              {user.senderId.name[0]?.toUpperCase()}
            </div>
            <div>
              <div className='text-base tracking-wider mb-2'>
                {user.senderId.name}
              </div>
              <p className='text-gray-500 italic'>{user.senderId.email}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default UserList
