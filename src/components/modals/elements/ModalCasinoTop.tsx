import { ReactComponent as News } from "assets/img/news.svg"
import ModalClose from "components/modals/general/ModalClose"
import React from "react"

const ModalCasinoTop = ({ handler }: { handler: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-[12px] sm:grid-cols-[1fr,auto]">
        <div className="grid w-full grid-cols-[auto,1fr] items-center justify-start gap-[14px] sm:justify-center">
          <News />
          <div className="grid w-full grid-cols-1 gap-[2px]">
            <div className="text-[18px] font-bold text-white sm:text-[20px]">Casino Update</div>
            <div className="text-[10px] font-semibold text-grey-light-4 sm:text-[12px]">
              Hey Howl Users, we&apos;ve released our{" "}
              <span className="text-[10px] text-yellow sm:text-[12px]">long anticipate new update</span> today.
            </div>
          </div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalCasinoTop
