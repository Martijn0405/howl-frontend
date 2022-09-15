import Bg from "assets/img/bg.png"
import Chat from "components/chat/Chat"
import Nav from "components/nav/Nav"
import { SLUG } from "libs/constants"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

const WrapperPage = ({ title, children }: { title: string; children: any }) => {
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
      <Helmet>
        <title>
          {title} {SLUG}
        </title>
      </Helmet>
      <div className="relative mt-56 mb-56 xl:mt-[108px] xl:mb-0 xl:ml-[330px]">
        <div className="absolute top-0 left-0 w-full">
          <img alt="" className="w-full" src={Bg} />
        </div>
        <div className="relative w-full p-20">{children}</div>
      </div>
      <div className="fixed top-0 left-0 h-[100vh] w-full">
        <Nav openChat={openChat} openNav={openNav} setOpenChat={setOpenChat} setOpenNav={setOpenNav} />
        <Chat openChat={openChat} />
      </div>
    </>
  )
}

export default WrapperPage
