import React from "react"
import { MdClose } from "react-icons/md"

const ModalClose = ({ handler }: { handler: any }) => {
  return (
    <>
      <button className="group flex h-32 w-32 items-center justify-center sm:h-42 sm:w-42" onClick={handler}>
        <MdClose className="tr text-24 text-grey-light-4 group-hover:text-white" />
      </button>
    </>
  )
}

export default ModalClose
