import { ReactComponent as IconChat } from "assets/img/chat.svg"
import { ReactComponent as IconHome } from "assets/img/home.svg"
import { ReactComponent as Icon } from "assets/img/icon.svg"
import NavMobileButton from "components/nav/mobile/NavMobileButton"
import NavWallet from "components/nav/NavWallet"
import { URL } from "libs/constants"
import React from "react"

const NavMobileBottom = ({ handlerChat }: { handlerChat: any }) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-30 flex h-56 w-full items-center justify-between gap-12 bg-grey-med-2 pl-12 shadow-nav xl:hidden ">
        <Icon className="h-40" />
        <NavWallet />
        <div className="flex h-56 w-56 items-center justify-center bg-grey-med-4"></div>
      </div>
      <div className="fixed bottom-0 left-0 z-30 flex h-72 w-full items-center justify-between gap-12 bg-grey-med-2 px-24 py-12 xl:hidden">
        <NavMobileButton
          handler={handlerChat}
          icon={<IconChat className="tr-c fill-current text-grey-med-7 group-hover:text-white" />}
        />
        <NavMobileButton
          handler={URL.HOME}
          icon={<IconHome className="tr-c fill-current text-grey-med-7 group-hover:text-white" />}
          link
        />
      </div>
    </>
  )
}

export default NavMobileBottom
