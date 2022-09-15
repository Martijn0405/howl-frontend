import React from "react"

const ModalBg = ({ handler, right }: { handler: any; right?: boolean }) => {
  return (
    <>
      <button
        className={`fixed top-56 bottom-72 w-full bg-grey-med-92 backdrop-blur-sm backdrop-filter xl:top-0 xl:bottom-0 xl:h-full ${
          right ? "right-0" : "left-0"
        }`}
        onClick={() => handler(false)}
      ></button>
    </>
  )
}

export default ModalBg
