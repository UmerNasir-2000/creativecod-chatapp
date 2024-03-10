import { Plus, SmilePlus } from "lucide-react"
import { useSocket } from "../../../socket.provider"
import { useCallback, useState, KeyboardEvent } from "react"
import { useAppSelector } from "../../../app/hooks"

const ChatMessageInput = () => {
  const { socket } = useSocket()

  const [message, setMessage] = useState("")

  const currentChat = useAppSelector((state) => state.chat.currentChat)

  const onSendMessage = useCallback(
    async (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        socket?.emit("send-message", {
          message,
          receiverId: currentChat?.senderId._id,
          senderId: currentChat?.receiverId,
        })
      }
    },
    [message, currentChat?.senderId._id, socket]
  )

  return (
    <div className='mt-auto p-3 flex items-center gap-x-2'>
      <Plus className='cursor-pointer text-gray-700 hover:opacity-75 transition-opacity' />
      <input
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='rounded-md border-2 border-slate-600 dark:border-gray-700 p-3 py-[8px] w-full text-sm dark:bg-gray-900 dark:text-white focus:ring-0 
        focus-visible:ring-0 focus-visible:outline-none focus-visible:border-border-slate-600'
        onKeyDown={onSendMessage}
      />
      <SmilePlus className='cursor-pointer text-gray-700 hover:opacity-75 transition-opacity' />
    </div>
  )
}

export default ChatMessageInput
