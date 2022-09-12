import { createCtx } from "contexts/Context"
import React, { createContext, useState } from "react"
import { useCookies } from "react-cookie"

type PropsContextType = {
  authenticated: boolean
  path: string
  route: boolean
  token: any
  setPath: any
}

export const [useProps, CtxProvider] = createCtx<PropsContextType>()

export const PropsContext = createContext<PropsContextType | undefined>(
  undefined
)

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [authenticated] = useState(false)
  const [path, setPath] = useState(window.location.pathname)
  const [route] = useState(
    parseInt(process.env.REACT_APP_ADMIN ?? "") ? true : false
  )

  const [token] = useCookies(["auth"])

  return (
    <>
      <CtxProvider value={{ authenticated, path, route, token, setPath }}>
        {children}
      </CtxProvider>
    </>
  )
}

export default PropsProvider
