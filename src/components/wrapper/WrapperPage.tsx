import React from "react"

const WrapperPage = ({ children }: { children: any }) => {
  return (
    <>
      <div className="flex w-full justify-center overflow-hidden px-20 pt-120 pb-60 sm:px-30 sm:pb-80 md:px-40 md:pb-100 lg:px-60 lg:pb-[120px]">
        <div className="w-full max-w-screen-2xl">{children}</div>
      </div>
    </>
  )
}

export default WrapperPage
