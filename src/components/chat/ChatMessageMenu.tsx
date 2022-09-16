import { LinkInterface, MessageInterface } from "libs/interfaces"
import React, { RefObject, useEffect, useState } from "react"
import { MdPerson, MdReply } from "react-icons/md"
import { Link } from "react-router-dom"

const ChatMessageMenu = ({
  avatar,
  message,
  handler
}: {
  avatar: RefObject<HTMLDivElement>
  message: MessageInterface
  handler: any
}) => {
  const onProfile = () => {
    handler()

    console.log(message.name)
  }

  const onReply = () => {
    handler()

    console.log(message.message)
  }

  const [links] = useState<LinkInterface[]>([
    {
      title: "View Profile",
      icon: <MdPerson className="tr-c text-[16px] text-grey-med-7 group-hover:text-red" />,
      action: onProfile,
      link: ""
    },
    {
      title: "Reply",
      icon: <MdReply className="tr-c text-[16px] text-grey-med-7 group-hover:text-red" />,
      action: onReply,
      link: ""
    }
  ])

  const [open, setOpen] = useState(false)
  const [top, setTop] = useState(0)

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    setOpen(top === 0 ? false : true)
  }, [top])

  const onLoad = () => {
    if (avatar.current) {
      const newTop = avatar.current.getBoundingClientRect().top

      setTop(newTop + 64)
    }
  }

  return (
    <>
      {open ? (
        <>
          <div className="fixed top-0 left-0 z-30 h-[100vh] w-full" onClick={handler}></div>
          <div
            className="fixed left-[12px] z-40 w-[140px] min-w-0 rounded-[4px] bg-grey-dark p-[6px]"
            style={{ top: `${top}px` }}
          >
            <div className="absolute top-[4px] left-[28px] h-[22px] w-[22px] translate-y-[-50%] translate-x-[-50%] rotate-[45deg] transform rounded-[4px] bg-grey-dark"></div>
            <div className="relative grid w-full grid-cols-1 gap-[4px]">
              {links.map((link: LinkInterface, key: number) => (
                <div key={key} className="w-full">
                  {link.link ? (
                    <Link className="grid w-full grid-cols-[auto,1fr] gap-[6px]" to={link.link}>
                      {link.icon}
                      <div className="w-full">{link.title}</div>
                    </Link>
                  ) : (
                    <button
                      className="tr-c group grid h-[36px] w-full grid-cols-[auto,1fr] items-center gap-[6px] rounded-[4px] px-[10px] hover:bg-grey-med-2"
                      onClick={link.action}
                    >
                      <div className="flex h-[14px] w-[14px] items-center justify-center">{link.icon}</div>
                      <div className="tr-c w-full text-left text-[12px] font-bold text-grey-light-5 group-hover:text-white">
                        {link.title}
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default ChatMessageMenu
