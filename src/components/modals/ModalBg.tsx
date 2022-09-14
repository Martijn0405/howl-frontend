import React from "react"

const ModalBg = ({ handler }: { handler: any }) => {
  return (
    <>
      <button
        className="fixed top-56 left-0 bottom-72 z-30 h-full w-full bg-grey-med-92 backdrop-blur-sm backdrop-filter xl:top-0 xl:bottom-0"
        onClick={() => handler(false)}
      ></button>
    </>
  )
}

export default ModalBg
