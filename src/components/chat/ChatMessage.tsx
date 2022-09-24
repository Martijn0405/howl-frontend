import BgMessage from "assets/img/bg_message.png"
import Texture from "assets/img/texture_chat.png"
import ChatMessageMenu from "components/chat/ChatMessageMenu"
import Wrapper from "components/wrapper/Wrapper"
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
        className={`relative grid w-full grid-cols-1 gap-[8px] pl-[40px] pr-[24px] ${
          message.reply ? "py-[12px]" : "py-[6px]"
        } ${replyToMe ? "bg-grey-dark" : ""}`}
      >
        {message.reply ? (
          <div className="relative flex h-[24px] w-full items-center pl-[14px]">
            <div className="absolute top-[12px] -left-[34px] h-[50px] w-[16px] rounded-l-[4px] border-l-2 border-t-2 border-b-2 border-grey-med-4"></div>
            <div
              className={`absolute top-[50%] -left-[20px] h-[32px] w-[32px] translate-y-[-50%] transform rounded-full border-4 ${
                replyToMe ? "border-grey-dark" : "border-grey-med"
              }`}
            >
              <img alt="" className="h-full w-[24px] rounded-full" src={message.reply.avatar} />
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
          <div className="absolute top-[-1px] bottom-[-1px] w-full rounded-[6px] bg-gradient-to-b from-[rgba(40,40,54,0.48)] to-black-8"></div>
          <div className="relative grid w-full grid-cols-1 gap-[6px] overflow-hidden rounded-[4px] bg-grey-med-2 py-[10px] pl-[32px] pr-[24px]">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
              <img alt="" className="absolute left-0 top-0 h-full w-full object-cover" src={BgMessage} />
              {
                {
                  [""]: <></>,
                  ["vip"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] rounded-r-[6px] border-[1px] border-vip opacity-50"></div>
                  ),
                  ["mod"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] rounded-r-[6px] border-[1px] border-mod opacity-50"></div>
                  ),
                  ["admin"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] rounded-r-[6px] border-[1px] border-admin opacity-50"></div>
                  ),
                  ["streamer"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] rounded-r-[6px] border-[1px] border-streamer opacity-50"></div>
                  )
                }[message.type]
              }
              <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] bg-gradient-to-r from-grey-med-2-20 to-grey-med-2"></div>

              {
                {
                  [""]: <></>,
                  ["vip"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] bg-gradient-to-r from-vip-10 to-transparent"></div>
                  ),
                  ["mod"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] bg-gradient-to-r from-mod-10 to-transparent"></div>
                  ),
                  ["admin"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] bg-gradient-to-r from-admin-10 to-transparent"></div>
                  ),
                  ["streamer"]: (
                    <div className="absolute left-0 top-0 h-full w-full rounded-l-[4px] bg-gradient-to-r from-streamer-10 to-transparent"></div>
                  )
                }[message.type]
              }
            </div>
            <Wrapper open={message.type ? true : false}>
              <img alt={""} className="absolute top-0 left-0 h-full w-full object-cover" src={Texture} />
            </Wrapper>
            <div className="relative grid w-full grid-cols-[auto,1fr] gap-[8px]">
              {
                {
                  [""]: (
                    <div className="relative flex h-[20px] min-w-[20px] items-center justify-center overflow-hidden rounded-[4px] bg-grey-dark px-[4px] shadow-level">
                      <div className="absolute top-0 left-0 h-full w-full bg-level opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] border-level"></div>
                      <div className="relative z-10 text-[10px] font-bold text-level">{message.level}</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-2 border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["mod"]: (
                    <div className="relative flex h-[20px] min-w-[20px] items-center justify-center overflow-hidden rounded-[4px] bg-grey-dark px-[4px] shadow-mod">
                      <div className="absolute top-0 left-0 h-full w-full bg-mod opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] border-mod"></div>
                      <div className="z-10 text-[10px] font-bold text-mod">M</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-2 border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["admin"]: (
                    <div className="relative flex h-[20px] min-w-[20px] items-center justify-center overflow-hidden rounded-[4px] bg-grey-dark px-[4px] shadow-admin">
                      <div className="absolute top-0 left-0 h-full w-full bg-admin opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] border-admin"></div>
                      <div className="z-10 text-[10px] font-bold text-admin">A</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-2 border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["streamer"]: (
                    <div className="relative flex h-[20px] min-w-[20px] items-center justify-center overflow-hidden rounded-[4px] bg-grey-dark px-[4px] shadow-streamer">
                      <div className="absolute top-0 left-0 h-full w-full bg-streamer opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] border-streamer"></div>
                      <div className="z-10 text-[10px] font-bold text-streamer">
                        <FaVideo className="text-[10px] text-streamer" />
                      </div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-2 border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  ),
                  ["vip"]: (
                    <div className="relative flex h-[20px] min-w-[20px] items-center justify-center overflow-hidden rounded-[4px] bg-grey-dark px-[4px] shadow-vip">
                      <div className="absolute top-0 left-0 h-full w-full bg-vip opacity-[.24]"></div>
                      <div className="absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] border-vip"></div>
                      <div className="z-10 text-[10px] font-bold text-vip">VIP</div>
                      <div className="absolute top-0 left-0 h-full w-full border-t-2 border-grey-dark bg-gradient-to-b from-grey-dark to-transparent"></div>
                    </div>
                  )
                }[message.type]
              }
              <div className={`w-full text-[12px] font-bold ${message.type ? "text-white" : "text-grey-100"}`}>
                {message.name}
              </div>
            </div>
            <div className="relative w-full text-[12px] text-grey-light-5">{message.message}</div>
            <div className="absolute top-0 right-0 rounded-bl-4 bg-white-2 px-[6px] py-2 text-[11px] font-semibold text-grey-700">
              {moment(message.date).format(DATE.TIME)}
            </div>
          </div>
          <div
            ref={avatar}
            className="absolute top-[4px] -left-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-grey-med"
          >
            <button className="relative h-[42px] w-[42px]" onClick={() => setOpenMenu(!openMenu)}>
              <img alt="" className="h-full w-full rounded-full bg-grey-med-2" src={message.avatar} />
              {
                {
                  ["streamer"]: (
                    <div className="absolute top-0 left-0 h-[42px] w-[42px] rounded-full border-[1px] border-streamer"></div>
                  ),
                  ["vip"]: (
                    <div className="absolute top-0 left-0 h-[42px] w-[42px] rounded-full border-[1px] border-vip"></div>
                  ),
                  ["mod"]: (
                    <div className="absolute top-0 left-0 h-[42px] w-[42px] rounded-full border-[1px] border-mod"></div>
                  ),
                  ["admin"]: (
                    <div className="absolute top-0 left-0 h-[42px] w-[42px] rounded-full border-[1px] border-admin"></div>
                  ),
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
