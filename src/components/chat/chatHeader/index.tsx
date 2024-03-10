import { Settings2 } from "lucide-react"
import { useAppSelector } from "../../../app/hooks"

const ChatHeader = () => {
  const currentChat = useAppSelector((state) => state.chat.currentChat)
  return (
    <div>
      <header className='border-b-2 border-slate-600 shadow-md'>
        <div className='flex justify-between items-center p-[9px]'>
          <div className='flex items-center gap-x-2'>
            <h2 className='text-lg tracking-wide dark:text-white text-shadow'>
              {currentChat?.senderId.name}
            </h2>
            <p className='text-xs text-gray-400 italic'>
              {currentChat?.senderId.email}
            </p>
          </div>
          <div>
            <Settings2 className='cursor-pointer' />
          </div>
        </div>
      </header>
    </div>
  )
}

export default ChatHeader
