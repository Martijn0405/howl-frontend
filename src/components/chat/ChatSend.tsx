import { ReactComponent as Emoji } from "assets/img/emoji.svg"
import { useProps } from "contexts/PropsContext"
import React, { useState } from "react"
import { MdClose } from "react-icons/md"

const ChatSend = () => {
  const { user } = useProps()

  const [message, setMessage] = useState("")

  return (
    <>
      <div className="flex w-full items-center justify-between gap-12 bg-grey-dark py-6 px-24">
        <div className="flex items-center gap-12">
          <div className="text-12 font-semibold text-grey-light-5">Replying to:</div>
          <div className="flex items-center gap-8">
            <img alt="" className="h-24 w-24 rounded-full" src={user.avatar} />
            <div className="text-12 font-semibold text-white">@{user.username}</div>
          </div>
        </div>
        <button className="tr-c group flex h-20 w-20 items-center justify-center rounded-full bg-grey-med-5 hover:bg-grey-light-2">
          <MdClose className="tr-c text-14 text-grey-light-2 group-hover:text-white" />
        </button>
      </div>
      <div className="w-full border-t-2 border-grey-dark py-12 px-24">
        <div className="grid h-48 w-full grid-cols-[1fr,auto] gap-8 rounded-4 border-1 border-grey-med-7 bg-grey-dark py-8 pl-20 pr-8">
          <input
            className="w-full text-12 font-semibold text-grey-light-5"
            placeholder="Type Message Here..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="tr-c  flex h-30 w-30 items-center justify-center rounded-4 hover:bg-red-12">
            <Emoji className="h-18 w-18 text-red" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatSend
