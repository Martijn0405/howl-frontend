import ModalCasino from "components/modals/ModalCasino"
import ModalChatRules from "components/modals/ModalChatRules"
import ModalDiscord from "components/modals/ModalDiscord"
import ModalNotifications from "components/modals/ModalNotifications"
import ModalWallet from "components/modals/ModalWallet"
import { useModal } from "contexts/ModalContext"
import React from "react"

const Modals = () => {
  const {
    openCasino,
    openDiscord,
    openNotifications,
    openRules,
    openWallet,
    setOpenCasino,
    setOpenDiscord,
    setOpenNotifications,
    setOpenRules,
    setOpenWallet
  } = useModal()

  return (
    <>
      <ModalNotifications handler={setOpenNotifications} open={openNotifications} />
      <ModalCasino handler={setOpenCasino} handlerSide={() => setOpenNotifications(false)} open={openCasino} />

      <ModalChatRules handler={setOpenRules} open={openRules} />
      <ModalDiscord handler={setOpenDiscord} open={openDiscord} />
      <ModalWallet handler={setOpenWallet} open={openWallet} />
    </>
  )
}

export default Modals
