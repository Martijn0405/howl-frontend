import React from "react"

const ModalBg = ({ handler, right, full }: { handler: any; right?: boolean; full?: boolean }) => {
  return (
    <>
      <button
        className={`fixed w-full bg-grey-med-92 backdrop-blur-sm backdrop-filter desktop:top-0 desktop:bottom-0 desktop:h-full ${
          full ? "top-0 bottom-0" : "top-[56px] bottom-[72px]"
        } ${right ? "right-0" : "left-0"}`}
        onClick={() => handler(false)}
      ></button>
    </>
  )
}

export default ModalBg
