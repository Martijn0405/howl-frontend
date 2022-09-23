import React, { useEffect, useState } from "react"

const Modal = ({
  children,
  open,
  up,
  right,
  full
}: {
  children: any
  open: boolean
  up?: boolean
  right?: boolean
  full?: boolean
}) => {
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
        className={`tr fixed z-30 flex w-screen min-w-[330px] items-start overflow-hidden sm:items-center desktop:top-0 desktop:bottom-0 desktop:h-screen ${
          full ? "top-0 bottom-0" : "top-[56px] bottom-[72px]"
        } ${right ? "right-0" : "left-0"} ${open ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`flex max-h-[100%] w-full justify-center rounded-[4px] px-[12px] sm:px-[20px] ${
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
