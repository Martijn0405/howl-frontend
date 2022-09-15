import { ReactComponent as Icon } from "assets/img/icon.svg"
import { ReactComponent as MenuClose } from "assets/img/menu_close.svg"
import { ReactComponent as MenuOpen } from "assets/img/menu_open.svg"
import NavWallet from "components/nav/NavWallet"
import { URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"

const NavMobileTop = ({ openNav, setOpenNav }: { openNav: boolean; setOpenNav: (openNav: boolean) => void }) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-30 flex h-56 w-full items-center justify-between gap-12 bg-grey-med-2 pl-12 shadow-nav xl:hidden ">
        <Link to={URL.HOME}>
          <Icon className="h-40" />
        </Link>
        <NavWallet />
        <button
          className="flex h-56 w-56 items-center justify-center bg-grey-med-5"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <MenuClose /> : <MenuOpen />}
        </button>
      </div>
    </>
  )
}

export default NavMobileTop
