import BgMessage from "assets/img/bg_message.png"
import ChatMessageMenu from "components/chat/ChatMessageMenu"
import { DATE } from "libs/constants"
import { MessageInterface } from "libs/interfaces"
import moment from "moment"
import React, { useRef, useState } from "react"
import { FaVideo } from "react-icons/fa"

const ChatMessage = ({ message }: { message: MessageInterface }) => {
  const avatar = useRef<HTMLDivElement>(null)

  const [openMenu, setOpenMenu] = useState(false)
  const [replyToMe] = useState<boolean>(false)

  return (
    <>
      <div
        className={`relative grid w-full grid-cols-1 gap-8 pl-40 pr-24 ${message.reply ? "py-12" : "py-6"} ${
          replyToMe ? "bg-grey-dark" : ""
        }`}
      >
        {message.reply ? (
          <div className="relative flex h-24 w-full items-center pl-14">
            <div className="absolute top-[12px] left-[-34px] h-50 w-16 rounded-l-4 border-l-2 border-t-2 border-b-2 border-grey-med-4"></div>
            <div
              className={`absolute top-[50%] left-[-20px] h-32 w-32 translate-y-[-50%] transform rounded-full border-4 ${
                replyToMe ? "border-grey-dark" : "border-grey-med"
              }`}
            >
              <img alt="" className="h-full w-24 rounded-full" src={message.reply.avatar} />
            </div>
            <div className="w-full truncate overflow-ellipsis text-[11px] text-grey-light-3">
              <span className="text-[11px] font-semibold text-grey-med-7">{message.reply.name}:</span>{" "}
              {message.reply.message}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="relative w-full">
          <div className="relative grid w-full grid-cols-1 gap-6 overflow-hidden rounded-4 bg-grey-med-2 py-10 pl-32 pr-24">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
              <img alt="" className="absolute left-0 top-0 h-full w-full object-cover" src={BgMessage} />
              {
                {
                  [""]: <></>,
                  ["vip"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 rounded-r-[6px] border-1 border-vip"></div>
                  ),
                  ["mod"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 rounded-r-[6px] border-1 border-mod"></div>
                  ),
                  ["admin"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 rounded-r-[6px] border-1 border-admin"></div>
                  ),
                  ["streamer"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 rounded-r-[6px] border-1 border-streamer"></div>
                  )
                }[message.type]
              }
              <div className="absolute left-0 top-0 h-full w-full rounded-l-4 bg-gradient-to-r from-grey-med-2-20 to-grey-med-2"></div>
              {
                {
                  [""]: <></>,
                  ["vip"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 bg-gradient-to-r from-vip-10 to-transparent"></div>
                  ),
                  ["mod"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 bg-gradient-to-r from-mod-10 to-transparent"></div>
                  ),
                  ["admin"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 bg-gradient-to-r from-admin-10 to-transparent"></div>
                  ),
                  ["streamer"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-4 bg-gradient-to-r from-streamer-10 to-transparent"></div>
                  )
                }[message.type]
              }
            </div>
            <div className="relative grid w-full grid-cols-[auto,1fr] gap-8">
              {
                {
                  [""]: (
                    <div className="relative flex h-20 min-w-[20px] items-center justify-center overflow-hidden rounded-4 bg-grey-dark px-4 shadow-level">
                      <div className="absolute top-0 left-0 h-full w-full bg-level opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-level"></div>
                      <div className="relative z-10 text-10 font-bold text-level">{message.level}</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-[2px] border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["mod"]: (
                    <div className="relative flex h-20 min-w-[20px] items-center justify-center overflow-hidden rounded-4 bg-grey-dark px-4 shadow-mod">
                      <div className="absolute top-0 left-0 h-full w-full bg-mod opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-mod"></div>
                      <div className="z-10 text-10 font-bold text-mod">M</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-[2px] border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["admin"]: (
                    <div className="relative flex h-20 min-w-[20px] items-center justify-center overflow-hidden rounded-4 bg-grey-dark px-4 shadow-admin">
                      <div className="absolute top-0 left-0 h-full w-full bg-admin opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-admin"></div>
                      <div className="z-10 text-10 font-bold text-admin">A</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-[2px] border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["streamer"]: (
                    <div className="relative flex h-20 min-w-[20px] items-center justify-center overflow-hidden rounded-4 bg-grey-dark px-4 shadow-streamer">
                      <div className="absolute top-0 left-0 h-full w-full bg-streamer opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-streamer"></div>
                      <div className="z-10 text-10 font-bold text-streamer">
                        <FaVideo className="text-10 text-streamer" />
                      </div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-[2px] border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["vip"]: (
                    <div className="relative flex h-20 min-w-[20px] items-center justify-center overflow-hidden rounded-4 bg-grey-dark px-4 shadow-vip">
                      <div className="absolute top-0 left-0 h-full w-full bg-vip opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-vip"></div>
                      <div className="z-10 text-10 font-bold text-vip">VIP</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-[2px] border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  )
                }[message.type]
              }
              <div className="w-full text-12 font-bold text-white">{message.name}</div>
            </div>
            <div className="relative w-full text-12 text-grey-light-5">{message.message}</div>
            <div className="absolute top-0 right-0 rounded-bl-4 bg-white-2 px-6 py-2 text-[11px] font-semibold text-grey-light-5">
              {moment(message.date).format(DATE.TIME)}
            </div>
          </div>
          <div
            ref={avatar}
            className="absolute top-4 left-[-25px] flex h-50 w-50 items-center justify-center rounded-full bg-grey-med"
          >
            <button className="relative h-42 w-42" onClick={() => setOpenMenu(!openMenu)}>
              <img alt="" className="h-full w-full rounded-full bg-grey-med-2" src={message.avatar} />
              {
                {
                  ["streamer"]: (
                    <div className="absolute top-0 left-0 h-42 w-42 rounded-full border-1 border-streamer"></div>
                  ),
                  ["vip"]: <div className="absolute top-0 left-0 h-42 w-42 rounded-full border-1 border-vip"></div>,
                  ["mod"]: <div className="absolute top-0 left-0 h-42 w-42 rounded-full border-1 border-mod"></div>,
                  ["admin"]: <div className="absolute top-0 left-0 h-42 w-42 rounded-full border-1 border-admin"></div>,
                  [""]: <></>
                }[message.type]
              }
            </button>
            {openMenu && avatar && avatar.current ? (
              <ChatMessageMenu avatar={avatar} handler={() => setOpenMenu(false)} message={message} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatMessage
