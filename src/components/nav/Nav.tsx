import { openLink } from "api/integration/functions"
import ModalWallet from "components/modals/ModalWallet"
import { LinkInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaTwitter } from "react-icons/fa"
import Button from "utils/buttons/Button"

const Nav = () => {
  const [openWallet, setOpenWallet] = useState(false)

  const [links] = useState<LinkInterface[]>([
    { link: "", title: "", icon: <FaTwitter className="tr-c text-14 text-grey-med-7 group-hover:text-white" /> }
  ])

  const [socials] = useState<LinkInterface[]>([])

  return (
    <>
      <div className="fixed left-[330px] top-0 right-0 border-b-2 border-grey-dark bg-grey-med-2">
        <div className="flex h-[36px] w-full items-center justify-between bg-grey-dark px-24">
          <div className="flex items-center gap-10">
            {links.map((link: LinkInterface, key: number) => (
              <button
                key={key}
                className="tr-c group flex h-24 w-24 items-center justify-center rounded-4 border-1 border-grey-med-2 bg-grey-dark hover:bg-grey-med-2"
                onClick={(e) => openLink(e, link.link)}
              >
                {link.icon}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-10">
            {socials.map((social: LinkInterface, key: number) => (
              <div key={key} className="text-12"></div>
            ))}
          </div>
        </div>
        <div className="flex h-[70px] w-full items-center justify-between px-24">
          <div className="flex h-64 w-64 items-center justify-center"></div>
          <Button handler={() => setOpenWallet(true)} title={"Wallet"} active />
        </div>
      </div>
      <ModalWallet handler={setOpenWallet} open={openWallet} />
    </>
  )
}

export default Nav
