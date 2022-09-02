import React, { useEffect, useState } from "react"
import { MdArrowUpward } from "react-icons/md"

const ModalWalletOverlay = ({ up, handler }: { up: boolean; handler: any }) => {
  const [modalUp, setModalUp] = useState(up)

  useEffect(() => {
    if (!up) {
      setTimeout(() => {
        setModalUp(up)
      }, 700)
    } else {
      setModalUp(up)
    }
  }, [up])

  return (
    <>
      <div
        className={`tr-o absolute bottom-24 left-0 flex h-full w-full items-end rounded-4 p-24 ${
          up ? "opacity-100" : "opacity-0"
        } ${modalUp ? "" : "z-[-1]"}`}
      >
        <div className="absolute bottom-0 left-0 h-full w-full rounded-4 bg-grey-med opacity-[.86] backdrop-blur-sm backdrop-filter"></div>
        <div className="relative flex w-full justify-center">
          <button className="flex h-50 items-start rounded-5 bg-black-32" onClick={handler}>
            <div className="flex h-48 items-center justify-center gap-14 rounded-4 bg-grey-med-4 px-20">
              <MdArrowUpward className="text-32 text-grey-med-7" />
              <div className="text-14 font-semibold text-grey-light-4">Return to Withdraw Methods</div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalWalletOverlay
