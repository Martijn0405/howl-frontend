import { ReactComponent as Emoji } from "assets/img/emoji.svg"
import { useProps } from "contexts/PropsContext"
import React, { useState } from "react"
import { MdClose } from "react-icons/md"

const ChatSend = () => {
  const { user } = useProps()

  const [message, setMessage] = useState("")

  return (
    <>
      <div className="flex w-full items-center justify-between gap-[12px] bg-grey-dark py-[6px] px-[24px]">
        <div className="flex items-center gap-[12px]">
          <div className="text-[12px] font-semibold text-grey-light-5">Replying to:</div>
          <div className="flex items-center gap-[8px]">
            <img alt="" className="h-[24px] w-[24px] rounded-full" src={user.avatar} />
            <div className="text-[12px] font-semibold text-white">@{user.username}</div>
          </div>
        </div>
        <button className="tr-c group flex h-[20px] w-[20px] items-center justify-center rounded-full bg-grey-med-5 hover:bg-grey-light-2">
          <MdClose className="tr-c text-[14px] text-grey-light-2 group-hover:text-white" />
        </button>
      </div>
      <div className="w-full border-t-2 border-grey-dark py-[12px] px-[24px]">
        <div className="grid h-[48px] w-full grid-cols-[1fr,auto] gap-[8px] rounded-[4px] border-[1px] border-grey-med-6 bg-grey-dark py-[8px] pl-[20px] pr-[8px]">
          <input
            className="w-full text-[12px] font-semibold text-grey-light-5"
            placeholder="Type Message Here..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="tr-c  flex h-[30px] w-[30px] items-center justify-center rounded-[4px] hover:bg-red-12">
            <Emoji className="h-[18px] w-[18px] text-red" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatSend
