import Notification from "components/nav/notifications/Notification"
import NotificationsTab from "components/nav/notifications/NotificationsTab"
import Wrapper from "components/wrapper/Wrapper"
import { useModal } from "contexts/ModalContext"
import { NotificationTabType, NotificationType } from "libs/enums"
import React, { useEffect, useRef, useState } from "react"

const NavNotificationsContent = () => {
  const wrapper = useRef<HTMLDivElement>(null)

  const { setOpenCasino } = useModal()

  const [tab, setTab] = useState(NotificationTabType.News)
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    if (!open) {
      setScrollable(false)
    }
  }, [open])

  useEffect(() => {
    if (wrapper.current) {
      if (wrapper.current.clientHeight >= 400) {
        setScrollable(true)
      } else {
        setScrollable(false)
      }
    }
  }, [wrapper])

  return (
    <>
      <div className="w-full bg-grey-dark-2">
        <div className="relative grid w-full grid-cols-1">
          <div className="grid w-full grid-cols-2 items-center border-b-1 border-black-24 p-12">
            <NotificationsTab handler={setTab} selected={tab} tab={NotificationTabType.News} news />
            <NotificationsTab handler={setTab} selected={tab} tab={NotificationTabType.Transactions} />
          </div>
          <div className="relative w-full">
            <div ref={wrapper} className="max-h-360 w-full overflow-hidden p-12">
              <div className="grid w-full grid-cols-1 gap-8">
                <Notification
                  text={
                    <>
                      Hey Howl users, we&apos;ve released our long anticipate new update today. <br />
                      <br />
                      You can now play slots and live games as well as withdraw your winnings to crypto!
                    </>
                  }
                  handler={() => setOpenCasino(true)}
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
    </>
  )
}

export default NavNotificationsContent
