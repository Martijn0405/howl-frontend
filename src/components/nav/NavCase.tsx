import { ReactComponent as Case } from "assets/img/case.svg"
import { useModal } from "contexts/ModalContext"
import React from "react"

const NavCase = () => {
  const { setOpenDiscord } = useModal()

  return (
    <>
      <button className="group flex items-center gap-[6px]" onClick={() => setOpenDiscord(true)}>
        <Case className="tr-c fill-current text-[16px] text-grey-light-5 group-hover:text-white" />
        <div className="tr-c text-[12px] font-semibold text-grey-light-5 group-hover:text-white">Daily Case</div>
      </button>
    </>
  )
}

export default NavCase
