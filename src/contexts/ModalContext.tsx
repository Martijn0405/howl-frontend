import { createCtx } from "contexts/Context"
import React, { createContext, useState } from "react"

type ModalContextType = {
  openCasino: boolean
  openDiscord: boolean
  openGames: boolean
  openNotifications: boolean
  openRules: boolean
  openWallet: boolean
  setOpenCasino: (open: boolean) => void
  setOpenDiscord: (open: boolean) => void
  setOpenGames: (open: boolean) => void
  setOpenNotifications: (open: boolean) => void
  setOpenRules: (openRules: boolean) => void
  setOpenWallet: (openWallet: boolean) => void
}

export const [useModal, CtxProvider] = createCtx<ModalContextType>()

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCasino, setOpenCasino] = useState(false)
  const [openDiscord, setOpenDiscord] = useState(false)
  const [openGames, setOpenGames] = useState(false)
  const [openNotifications, setOpenNotifications] = useState(false)
  const [openRules, setOpenRules] = useState(false)
  const [openWallet, setOpenWallet] = useState(false)

  return (
    <>
      <CtxProvider
        value={{
          openCasino,
          openDiscord,
          openGames,
          openNotifications,
          openRules,
          openWallet,
          setOpenCasino,
          setOpenDiscord,
          setOpenGames,
          setOpenNotifications,
          setOpenRules,
          setOpenWallet
        }}
      >
        {children}
      </CtxProvider>
    </>
  )
}

export default ModalProvider
