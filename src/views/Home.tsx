import ModalWallet from "components/modals/ModalWallet"
import { SLUG } from "libs/constants"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Button from "utils/buttons/Button"

const Home = () => {
  const [openWallet, setOpenWallet] = useState(false)
  const [openRust, setOpenRust] = useState(false)
  const [openGiftcard, setOpenGiftcard] = useState(false)
  const [openDeposit, setOpenDeposit] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)

  return (
    <>
      <Helmet>
        <title>Home {SLUG}</title>
      </Helmet>
      <div className="flex w-full flex-wrap gap-12 p-20">
        <Button handler={() => setOpenWallet(true)} title={"Wallet"} />
      </div>
      <ModalWallet handler={setOpenWallet} open={openWallet} />
      <ModalWallet handler={setOpenRust} open={openRust} />
      <ModalWallet handler={setOpenGiftcard} open={openGiftcard} />
      <ModalWallet handler={setOpenDeposit} open={openDeposit} />
      <ModalWallet handler={setOpenWithdraw} open={openWithdraw} />
    </>
  )
}

export default Home
