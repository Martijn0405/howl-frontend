import React from "react"
import { MdClose } from "react-icons/md"

const ModalClose = ({ handler }: { handler: any }) => {
  return (
    <>
      <button
        className="group flex h-[32px] w-[32px] items-center justify-center sm:h-[42px] sm:w-[42px]"
        onClick={handler}
      >
        <MdClose className="tr text-[24px] text-grey-light-4 group-hover:text-white" />
      </button>
    </>
  )
}

export default ModalClose
