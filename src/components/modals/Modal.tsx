import React, { useEffect, useState } from "react"

const Modal = ({ children, open, up }: { children: any; open: boolean; up: boolean }) => {
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
        className={`tr fixed top-0 left-0 z-30 flex h-screen w-screen min-w-[330px] items-start sm:items-center ${
          open ? "opacity-1" : "opacity-0"
        }`}
      >
        <div
          className={`flex max-h-full w-full justify-center rounded-4 px-12 sm:px-20 ${
            modalUp ? "" : "overflow-y-scroll"
          }`}
        >
          <div className="relative z-20 max-w-full">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Modal
