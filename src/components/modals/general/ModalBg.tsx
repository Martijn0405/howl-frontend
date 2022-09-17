import React from "react"

const ModalBg = ({ handler, right }: { handler: any; right?: boolean }) => {
  return (
    <>
      <button
        className={`fixed top-[56px] bottom-[72px] w-full bg-grey-med-92 backdrop-blur-sm backdrop-filter desktop:top-0 desktop:bottom-0 desktop:h-full ${
          right ? "right-0" : "left-0"
        }`}
        onClick={() => handler(false)}
      ></button>
    </>
  )
}

export default ModalBg
