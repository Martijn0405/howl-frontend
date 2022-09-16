import ModalCasino from "components/modals/ModalCasino"
import ModalChatRules from "components/modals/ModalChatRules"
import ModalDiscord from "components/modals/ModalDiscord"
import ModalGames from "components/modals/ModalGames"
import ModalNotifications from "components/modals/ModalNotifications"
import ModalWallet from "components/modals/ModalWallet"
import { useModal } from "contexts/ModalContext"
import React from "react"

const Modals = () => {
  const {
    openCasino,
    openDiscord,
    openGames,
    openNotifications,
    openRules,
    openWallet,
    setOpenCasino,
    setOpenDiscord,
    setOpenGames,
    setOpenNotifications,
    setOpenRules,
    setOpenWallet
  } = useModal()

  return (
    <>
      <div className="desktop:hidden">
        <ModalNotifications handler={setOpenNotifications} open={openNotifications} />
      </div>
      <ModalCasino handler={setOpenCasino} handlerSide={() => setOpenNotifications(false)} open={openCasino} />

      <ModalChatRules handler={setOpenRules} open={openRules} />
      <ModalDiscord handler={setOpenDiscord} open={openDiscord} />
      <div className="desktop:hidden">
        <ModalGames handler={setOpenGames} open={openGames} />
      </div>
      <ModalWallet handler={setOpenWallet} open={openWallet} />
    </>
  )
}

export default Modals
