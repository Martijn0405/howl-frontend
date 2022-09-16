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
        className={`tr-o absolute bottom-24 left-0 flex h-full w-full items-end rounded-[4px] p-[24px] ${
          up ? "opacity-100" : "opacity-0"
        } ${modalUp ? "" : "z-[-1]"}`}
      >
        <div className="absolute bottom-0 left-0 h-full w-full rounded-[4px] bg-grey-med opacity-[.86] backdrop-blur-sm backdrop-filter"></div>
        <div className="relative flex w-full justify-center">
          <button className="flex h-[50px] items-start rounded-[5px] bg-black-32" onClick={handler}>
            <div className="flex h-[48px] items-center justify-center gap-[14px] rounded-[4px] bg-grey-med-4 px-[20px]">
              <MdArrowUpward className="text-[32px] text-grey-med-7" />
              <div className="text-[14px] font-semibold text-grey-light-4">Return to Withdraw Methods</div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalWalletOverlay
