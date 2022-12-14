import { ReactComponent as Icon } from "assets/img/icon.svg"
import React from "react"

const OverlayLoading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden bg-purple">
        <div className="relative text-[24px] text-white sm:text-48 md:text-64">
          <Icon className="h-[40px] w-auto" />
        </div>
      </div>
    </>
  )
}

export default OverlayLoading
