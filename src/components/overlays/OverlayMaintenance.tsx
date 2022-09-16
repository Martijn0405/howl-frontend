import { ReactComponent as Icon } from "assets/img/icon.svg"
import React from "react"

const OverlayMaintenance = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden bg-purple">
        <Icon className="absolute top-[20px] left-[20px] h-[40px] w-auto" />
        <div className="relative text-[24px] text-white sm:text-48 md:text-64">Maintenance</div>
      </div>
    </>
  )
}

export default OverlayMaintenance
