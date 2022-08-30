import ModalWallet from "components/modals/ModalWallet"
import { SLUG } from "libs/constants"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Button from "utils/buttons/Button"

const Home = () => {
  const [openWallet, setOpenWallet] = useState(false)

  return (
    <>
      <Helmet>
        <title>Home {SLUG}</title>
      </Helmet>
      <div className="flex w-full flex-wrap gap-12 p-20">
        <Button handler={() => setOpenWallet(true)} title={"Wallet"} />
      </div>
      <ModalWallet handler={setOpenWallet} open={openWallet} />
    </>
  )
}

export default Home
