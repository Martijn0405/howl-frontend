import { createCtx } from "contexts/Context"
import { SOCKET } from "libs/constants"
import { userSample } from "libs/data"
import { UserInterface } from "libs/interfaces"
import React, { createContext, useEffect, useState } from "react"
import { io } from "socket.io-client"

type PropsContextType = {
  authenticated: boolean
  loading: boolean
  path: string
  route: boolean
  socket: any
  token: string
  user: UserInterface
  setPath: any
}

export const [useProps, CtxProvider] = createCtx<PropsContextType>()

export const PropsContext = createContext<PropsContextType | undefined>(undefined)

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [path, setPath] = useState(window.location.pathname)
  const [route] = useState(parseInt(process.env.REACT_APP_ADMIN ?? "") ? true : false)
  const [socket, setSocket] = useState<any>()
  const [token] = useState("")
  const [user] = useState<UserInterface>(userSample)

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    if (socket) {
      onSocket()
    }
  }, [socket])

  const onLoad = () => {
    setSocket(
      io(SOCKET, {
        query: { pingInterval: 25000, pingTimeout: 30000, sid: "Nkd3IJaPc5VN4jyhAEQS", upgrades: [] },
        rejectUnauthorized: false,
        transports: ["websocket"],
        withCredentials: true
      })
    )

    setLoading(false)
  }

  const onSocket = () => {
    socket.on("connect", () => {
      console.log("Main connected")
    })

    socket.on("connect_error", (err: any) => {
      console.error(err.message)
    })
  }

  return (
    <>
      <CtxProvider value={{ authenticated, loading, path, route, socket, token, user, setPath }}>
        {children}
      </CtxProvider>
    </>
  )
}

export default PropsProvider
