import ModalBg from "components/modals/ModalBg"
import React from "react"

const Modal = ({ children, open, handler }: { children: any; open: boolean; handler: any }) => {
  return (
    <>
      {open ? (
        <div className="fixed top-0 left-0 z-30 flex h-screen w-screen min-w-[330px] items-start sm:items-center">
          <div className="flex max-h-full w-full justify-center overflow-y-scroll rounded-4 px-12 sm:px-20">
            <ModalBg handler={handler} />
            <div className="relative z-20 max-w-full">{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Modal
