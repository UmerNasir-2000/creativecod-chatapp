import Chat from "./components/chat"
import { SocketProvider } from "./socket.provider"

function App() {
  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  )
}

export default App
