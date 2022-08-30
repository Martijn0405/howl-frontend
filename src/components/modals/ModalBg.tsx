import React from "react"

const ModalBg = ({ handler }: { handler: any }) => {
  return (
    <>
      <button
        className="fixed top-0 left-0 bottom-0 z-10 h-full w-full bg-grey-med-92 backdrop-blur-sm backdrop-filter"
        onClick={() => handler(false)}
      ></button>
    </>
  )
}

export default ModalBg
