import Chat from "components/chat/Chat"
import Nav from "components/nav/Nav"
import React, { useEffect, useState } from "react"

const WrapperOverlays = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openChat, setOpenChat] = useState(false)

  useEffect(() => {
    if (openNav) {
      setOpenChat(false)
    }
  }, [openNav])

  useEffect(() => {
    if (openChat) {
      setOpenNav(false)
    }
  }, [openChat])

  return (
    <>
      <div className="fixed top-0 left-0 h-[100vh] w-full">
        <Nav openChat={openChat} openNav={openNav} setOpenChat={setOpenChat} setOpenNav={setOpenNav} />
        <Chat openChat={openChat} />
      </div>
    </>
  )
}

export default WrapperOverlays
