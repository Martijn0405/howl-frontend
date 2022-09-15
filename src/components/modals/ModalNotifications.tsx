import ModalMobile from "components/modals/general/ModalMobile"
import NavNotificationsContent from "components/nav/NavNotificationsContent"
import Wrapper from "components/wrapper/Wrapper"
import React from "react"

const ModalNotifications = ({ open, handler }: { open: boolean; handler: any }) => {
  return (
    <>
      <Wrapper open={open}>
        <ModalMobile handler={handler}>
          <NavNotificationsContent />
        </ModalMobile>
      </Wrapper>
    </>
  )
}

export default ModalNotifications
