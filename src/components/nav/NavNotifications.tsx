import NavNotificationsContent from "components/nav/NavNotificationsContent"
import Wrapper from "components/wrapper/Wrapper"
import { useModal } from "contexts/ModalContext"
import React, { useEffect, useState } from "react"
import { FaBell } from "react-icons/fa"
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
            <FaBell className={`tr-c ${openNotifications ? "text-red" : "text-grey-med-7 group-hover:text-red"}`} />
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
          <div className="absolute top-70 -right-10 hidden w-360 rounded-4 bg-grey-dark-2 desktop:flex">
            <div className="absolute top-4 right-28 hidden h-22 w-22 translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-4 bg-grey-dark-2 desktop:block"></div>
            <div className="w-full overflow-hidden rounded-4">
              <NavNotificationsContent />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default NavNotifications
