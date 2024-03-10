import { SocketProvider } from "./socket.provider"

function App() {
  return (
    <SocketProvider>
      <h1 className='text-3xl font-bold underline'>React</h1>
    </SocketProvider>
  )
}

export default App
