import { MessageCircle } from "lucide-react"
import { ChatUser } from ".."

type ChatWindowProps = {
  currentChat: ChatUser | null
}

const ChatWindow: React.FC<ChatWindowProps> = (props: ChatWindowProps) => {
  const { currentChat } = props

  const chatJSX = (
    <section className='flex flex-col h-full'>
      {/* <ChatHeader currentChat={currentChat!} />
      <MessageList messages={messages} />
      <ChatMessageInput currentChat={currentChat!} setMessages={setMessages} /> */}
    </section>
  )

  const noChatSelectedJSX = (
    <section className='flex items-center justify-center h-full'>
      <div className='flex flex-col items-center gap-3'>
        <MessageCircle className='w-[80px] h-16 text-slate-950 dark:text-white opacity-50' />
        <p className='text-xs'>Collaborate with users and groups</p>
      </div>
    </section>
  )

  return (
    <div className='h-full'>{!!currentChat ? chatJSX : noChatSelectedJSX}</div>
  )
}

export default ChatWindow
