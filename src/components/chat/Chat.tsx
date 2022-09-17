import BgChat from "assets/img/bg_chat.png"
import { ReactComponent as Logo } from "assets/img/logo.svg"
import ChatLanguage from "components/chat/ChatLanguage"
import ChatMessage from "components/chat/ChatMessage"
import ChatRain from "components/chat/ChatRain"
import ChatRules from "components/chat/ChatRules"
import ChatSend from "components/chat/ChatSend"
import Wrapper from "components/wrapper/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { MessageInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Chat = ({ openChat }: { openChat: boolean }) => {
  const { socket } = useProps()

  const [messages, setMessages] = useState<MessageInterface[]>([])

  const [openRain] = useState(true)
  const [openLanguage, setOpenLanguage] = useState(false)

  useEffect(() => {
    onLoad()
    onSocket()
  }, [])

  const onLoad = () => {
    setMessages([
      {
        id: 1,
        avatar: "https://avatars.akamai.steamstatic.com/61d3ee3ce5728d311053e81e533ee3d363dc08f9_medium.jpg",
        name: "Bread",
        date: new Date().toISOString(),
        message: "Literally won over $5,000 on wheel bro, im cracked xd",
        level: 17,
        type: ""
      },
      {
        id: 1,
        avatar: "https://avatars.akamai.steamstatic.com/61d3ee3ce5728d311053e81e533ee3d363dc08f9_medium.jpg",
        name: "Bread",
        date: new Date().toISOString(),
        message: "Literally won over $5,000 on wheel bro, im cracked xd",
        level: 17,
        type: "streamer"
      },
      {
        id: 1,
        avatar: "https://avatars.akamai.steamstatic.com/61d3ee3ce5728d311053e81e533ee3d363dc08f9_medium.jpg",
        name: "Bread",
        date: new Date().toISOString(),
        message: "Literally won over $5,000 on wheel bro, im cracked xd",
        level: 17,
        type: "vip"
      },
      {
        id: 1,
        avatar: "https://avatars.akamai.steamstatic.com/61d3ee3ce5728d311053e81e533ee3d363dc08f9_medium.jpg",
        name: "Bread",
        date: new Date().toISOString(),
        message: "Literally won over $5,000 on wheel bro, im cracked xd",
        level: 17,
        type: "mod"
      },
      {
        id: 1,
        avatar: "https://avatars.akamai.steamstatic.com/61d3ee3ce5728d311053e81e533ee3d363dc08f9_medium.jpg",
        name: "Bread",
        date: new Date().toISOString(),
        message: "Literally won over $5,000 on wheel bro, im cracked xd",
        level: 17,
        type: "admin"
      },
      {
        id: 1,
        avatar: "https://avatars.akamai.steamstatic.com/61d3ee3ce5728d311053e81e533ee3d363dc08f9_medium.jpg",
        name: "Bread",
        date: new Date().toISOString(),
        message: "Literally won over $5,000 on wheel bro, im cracked xd",
        level: 17,
        type: "",
        reply: {
          id: 1,
          avatar: "https://avatars.akamai.steamstatic.com/61d3ee3ce5728d311053e81e533ee3d363dc08f9_medium.jpg",
          name: "Bread",
          date: new Date().toISOString(),
          message: "Literally won over $5,000 on wheel bro, im cracked xd",
          level: 17,
          type: ""
        }
      }
    ])
  }

  const onSocket = () => {
    console.log(socket)
  }

  return (
    <>
      <div
        className={`tr-t transition-700 absolute bottom-[72px] top-[56px] flex w-[330px] transform flex-col border-r-2 border-grey-dark bg-grey-med desktop:left-0 desktop:top-0 desktop:bottom-0 desktop:transition-none ${
          openChat ? "translate-x-[-0%]" : "translate-x-[-100%] desktop:translate-x-[0%]"
        }`}
      >
        <Link
          className="relative hidden h-[142px] w-full items-center justify-center border-b-2 border-grey-dark desktop:flex"
          to={URL.HOME}
        >
          <img alt="" className="absolute top-0 left-0 h-full w-full" src={BgChat} />
          <Logo className="relative h-[68px]" />
        </Link>
        <div
          className={`tr-c grid w-full grid-cols-[auto,1fr] gap-[8px] border-b-2 border-grey-dark py-[12px] px-[24px] ${
            openLanguage ? "bg-grey" : ""
          }`}
        >
          <ChatRules />
          <ChatLanguage handler={setOpenLanguage} open={openLanguage} />
        </div>
        <Wrapper open={openRain}>
          <ChatRain />
        </Wrapper>
        <div className="relative flex w-full flex-grow">
          <div className="absolute top-0 bottom-0 left-0 h-full w-full overflow-scroll">
            <div className="grid w-full grid-cols-1 items-start py-[10px]">
              {messages.map((message: MessageInterface, key: number) => (
                <ChatMessage key={key} message={message} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-0 hidden h-[100px] w-full bg-gradient-to-b from-grey-med to-transparent"></div>
          <div className="absolute bottom-0 left-0 hidden h-[100px] w-full bg-gradient-to-b from-grey-med to-transparent"></div>
        </div>
        <ChatSend />
      </div>
    </>
  )
}

export default Chat
