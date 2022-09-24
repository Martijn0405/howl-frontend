import { ReactComponent as Notification } from "assets/img/notification.svg"
import { ReactComponent as NotificationRed } from "assets/img/notification_red.svg"
import NavNotificationsContent from "components/nav/NavNotificationsContent"
import Wrapper from "components/wrapper/Wrapper"
import { useModal } from "contexts/ModalContext"
import React, { useEffect, useState } from "react"
import ButtonCircle from "utils/buttons/ButtonCircle"

const NavNotifications = ({ bg }: { bg: string }) => {
  const { openNotifications, setOpenNotifications } = useModal()

  const [newNotifications, setNewNotifications] = useState(false)

  useEffect(() => {
    setNewNotifications(true)
  }, [])

  return (
    <>
      <div className="relative">
        <ButtonCircle
          icon={
            <>
              <Notification
                className={`tr-c w-[17px] fill-current ${
                  openNotifications ? "text-red" : "text-grey-med-7 group-hover:text-red"
                }`}
              />
              <NotificationRed className="tr-o absolute w-[17px] opacity-0 group-hover:opacity-100" />
            </>
          }
          bg={bg}
          handler={() => setOpenNotifications(!openNotifications)}
          news={newNotifications}
          open={openNotifications}
        />
        <Wrapper open={openNotifications}>
          <button
            className="fixed top-0 right-0 hidden h-full w-screen bg-grey-med-92 desktop:top-0 desktop:flex desktop:w-full desktop:bg-transparent"
            onClick={() => setOpenNotifications(false)}
          ></button>
          <div className="absolute top-[70px] -right-[10px] hidden w-[360px] rounded-[4px] bg-grey-dark-2 desktop:flex">
            <div className="absolute top-[4px] right-[28px] hidden h-[22px] w-[22px] translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-[4px] bg-grey-dark-2 desktop:block"></div>
            <div className="w-full overflow-hidden rounded-[4px]">
              <NavNotificationsContent />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default NavNotifications
