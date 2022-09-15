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
            className="fixed top-0 right-0 hidden h-full w-screen bg-grey-med-92 xl:top-0 xl:flex xl:w-full xl:bg-transparent"
            onClick={() => setOpenNotifications(false)}
          ></button>
          <div className="absolute top-70 right-[-10px] hidden w-[360px] rounded-4 bg-grey-dark-2 xl:flex">
            <div className="absolute top-4 right-[28px] hidden h-22 w-22 translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-4 bg-grey-dark-2 xl:block"></div>
            <div className="w-full overflow-hidden">
              <NavNotificationsContent />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default NavNotifications