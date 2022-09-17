import { ReactComponent as IconChat } from "assets/img/chat.svg"
import { ReactComponent as IconHome } from "assets/img/home.svg"
import NavMobileButton from "components/nav/mobile/NavMobileButton"
import NavSwitcher from "components/nav/NavSwitcher"
import { URL } from "libs/constants"
import React from "react"

const NavMobileBottom = ({ handlerChat }: { handlerChat: any }) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-30 flex h-[72px] w-full items-center justify-between gap-[12px] bg-grey-med-2 px-[24px] py-[12px] desktop:hidden">
        <NavMobileButton
          handler={handlerChat}
          icon={<IconChat className="tr-c fill-current text-grey-med-7 group-hover:text-white" />}
        />
        <NavSwitcher mobile />
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
