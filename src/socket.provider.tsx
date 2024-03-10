import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import io from "socket.io-client"

type SocketContextType = {
  socket: any | null
  isConnected: boolean
}

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
})

export const useSocket = () => {
  return useContext(SocketContext)
}

const URL = import.meta.env.VITE_SOCKET_URL as string

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const [socket, setSocket] = useState()
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const socketInstance = io(URL)

    socketInstance.on("connection", (obj: any) => {
      console.log("Inside connect :>> ")
      console.log("obj :>> ", obj)
      setIsConnected(true)
    })

    socketInstance.on("disconnect", () => {
      setIsConnected(false)
    })

    // @ts-ignore
    setSocket(socketInstance)

    return () => {
      socketInstance.disconnect()
    }
  }, [])

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  )
}
