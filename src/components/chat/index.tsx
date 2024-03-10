import { useChatUsers } from "../../features/users/hooks"
import ChatTabs from "./chatTabs"
import ChatWindow from "./chatWindow"

export interface ChatUser {
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

const Chat: React.FC = () => {
  useChatUsers()

  return (
    <div className='my-10 mt-14'>
      <div className='grid grid-cols-4 max-w-[1400px] mx-auto h-[950px]'>
        <div className='hidden bg-zinc-300 col-span-1 rounded-tl-xl rounded-bl-xl shadow-xl md:block dark:bg-slate-800'>
          <ChatTabs />
        </div>
        <div className='bg-zinc-100 col-span-3 rounded-tr-xl rounded-br-xl shadow-xl dark:bg-gray-900'>
          <ChatWindow />
        </div>
      </div>
    </div>
  )
}

export default Chat
