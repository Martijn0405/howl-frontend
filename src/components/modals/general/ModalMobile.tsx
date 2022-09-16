import ModalBg from "components/modals/general/ModalBg"
import React from "react"
import { MdClose } from "react-icons/md"

const ModalMobile = ({ handler, children }: { handler: any; children: any }) => {
  return (
    <>
      <div className="tr fixed top-56 bottom-72 z-30 flex w-screen min-w-330 items-start overflow-hidden sm:items-center desktop:top-0 desktop:bottom-0 desktop:h-screen">
        <ModalBg handler={handler} />
        <div className="absolute bottom-0 left-0 w-full">
          <div className="absolute top-0 left-0 z-10 w-full border-t-1 border-red"></div>
          <button
            className="group absolute top-0 right-0 flex h-40 translate-y-[-100%] transform items-center gap-8 rounded-tl-12 bg-white-2 px-16"
            onClick={() => handler(false)}
          >
            <MdClose className="tr-c text-grey-light group-hover:text-white" />
            <div className="tr-c text-14 font-semibold text-grey-light-4 group-hover:text-white">Close</div>
          </button>
          <div className="max-h-[calc(100vh-12.5rem)] w-full overflow-scroll bg-grey-dark">{children}</div>
        </div>
      </div>
    </>
  )
}

export default ModalMobile
