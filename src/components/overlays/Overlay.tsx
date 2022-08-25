import React from "react"

const Overlay = ({ children }: { children: any }) => {
  return (
    <>
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-purple">
        <div className="max-h-full w-full max-w-screen-xl overflow-y-scroll p-20">{children}</div>
      </div>
    </>
  )
}

export default Overlay
