import Cc from "assets/img/cc.png"
import ModalClose from "components/modals/ModalClose"
import React from "react"

const ModalGiftcardsTop = ({ handler }: { handler: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-12 sm:grid-cols-[auto,1fr,auto]">
        <div className="hidden w-42 sm:flex"></div>
        <div className="grid w-full grid-cols-[auto,auto,auto] items-center justify-start gap-10 sm:justify-center">
          <div className="text-14 uppercase tracking-widest text-white sm:text-20">Purchase</div>
          <img alt="" className="col-start-1 row-start-1 h-32 sm:col-start-2 sm:h-40" src={Cc} />
          <div className="text-14 font-bold uppercase tracking-widest text-red sm:text-20">Giftcards</div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalGiftcardsTop
