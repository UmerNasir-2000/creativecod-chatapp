import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchChatMessages } from "../../../features/chat/chatSlice"

const MessageList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchChatMessages())
  }, [])

  const messages = useAppSelector((state) => state.chat.messages)
  return (
    <div className='flex-grow px-6 py-4 gap-2'>
      <div className='overflow-y-auto max-h-[950px] custom-scrollbar'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              "651360e4feb2f73c71d49bfa" === message.senderId
                ? "justify-end"
                : "justify-start"
            } mb-3`}
          >
            <div
              className={`max-w-xs px-4 py-[6px] text-sm rounded-lg shadow-md ${
                "651360e4feb2f73c71d49bfa" === message.senderId
                  ? "bg-gray-100 text-gray-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              <p>{message.text}</p>
              <p className='text-xs text-right'>
                {new Date(message.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessageList
