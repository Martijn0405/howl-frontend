import { ReactComponent as Icon } from "assets/img/icon.svg"
import NavWallet from "components/nav/NavWallet"
import React from "react"

const NavMobileTop = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-30 flex h-56 w-full items-center justify-between gap-12 bg-grey-med-2 pl-12 shadow-nav xl:hidden ">
        <Icon className="h-40" />
        <NavWallet />
        <div className="flex h-56 w-56 items-center justify-center bg-grey-med-4"></div>
      </div>
    </>
  )
}

export default NavMobileTop
