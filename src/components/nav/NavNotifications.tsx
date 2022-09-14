import Notification from "components/nav/notifications/Notification"
import NotificationsTab from "components/nav/notifications/NotificationsTab"
import Wrapper from "components/wrapper/Wrapper"
import { NotificationTabType, NotificationType } from "libs/enums"
import React, { useEffect, useRef, useState } from "react"
import { FaBell } from "react-icons/fa"

const NavNotifications = () => {
  const wrapper = useRef<HTMLDivElement>(null)

  const [openNotifications, setOpenNotifications] = useState(false)

  const [tab, setTab] = useState(NotificationTabType.News)
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    if (wrapper.current) {
      if (wrapper.current.clientHeight >= 360) {
        setScrollable(true)
      } else {
        setScrollable(false)
      }
    }
  }, [wrapper])

  return (
    <>
      <div className="relative">
        <Wrapper open={openNotifications}>
          <button className="fixed top-0 left-0 h-full w-full" onClick={() => setOpenNotifications(false)}></button>
        </Wrapper>
        <button
          className="tr-c group flex h-32 w-32 items-center justify-center rounded-full border-1 border-grey-med-5 hover:border-red hover:bg-grey-med-5"
          onClick={() => setOpenNotifications(!openNotifications)}
        >
          <FaBell className="tr-c text-grey-med-7 group-hover:text-red" />
        </button>
        <Wrapper open={openNotifications}>
          <div className="absolute right-[-10px] top-70 w-[360px] rounded-4 bg-grey-dark-2">
            <div className="absolute top-4 right-[28px] h-22 w-22 translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-4 bg-grey-dark-2"></div>
            <div className="relative grid w-full grid-cols-1">
              <div className="grid w-full grid-cols-2 items-center border-b-1 border-black-24 p-12">
                <NotificationsTab handler={setTab} selected={tab} tab={NotificationTabType.News} news />
                <NotificationsTab handler={setTab} selected={tab} tab={NotificationTabType.Transactions} />
              </div>
              <div className="relative w-full">
                <div ref={wrapper} className="max-h-[360px] w-full overflow-hidden p-12">
                  <div className="grid w-full grid-cols-1 gap-8">
                    <Notification
                      text={
                        <>
                          Hey Howl users, we&apos;ve released our long anticipate new update today. <br />
                          <br />
                          You can now play slots and live games as well as withdraw your winnings to crypto!
                        </>
                      }
                      title={"Casino Update"}
                      type={NotificationType.Explore}
                    />
                    <Notification
                      text={<>You can learn more about it by pressing “Join Now”</>}
                      title={"Big Grin Giveaway"}
                      type={NotificationType.Join}
                    />
                  </div>
                </div>
                <Wrapper open={scrollable}>
                  <div className="absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-grey-med to-transparent"></div>
                </Wrapper>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default NavNotifications
