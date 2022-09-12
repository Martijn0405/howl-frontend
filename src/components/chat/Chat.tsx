import BgChat from "assets/img/bg_chat.png"
import { ReactComponent as Logo } from "assets/img/logo.svg"
import { URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"

const Chat = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex h-[100vh] w-[330px] flex-col border-r-2 border-grey-dark bg-grey-med">
        <Link
          className="relative flex h-[140px] w-full items-center justify-center border-b-2 border-grey-dark"
          to={URL.HOME}
        >
          <img alt="" className="absolute top-0 left-0 h-full w-full" src={BgChat} />
          <Logo className="relative h-[68px]" />
        </Link>
        <div className="w-full border-b-2 border-grey-dark py-12 px-24"></div>
        <div className="flex w-full flex-grow overflow-auto"></div>
        <div className="w-full border-t-2 border-grey-dark py-12 px-24"></div>
      </div>
    </>
  )
}

export default Chat
