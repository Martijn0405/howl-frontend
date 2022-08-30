import { ReactComponent as Texture } from "assets/img/texture.svg"
import React from "react"

const WrapperModal = ({ children, top, wide }: { children: any; top: JSX.Element; wide?: boolean }) => {
  return (
    <>
      <div className="w-full pt-12 pb-24 sm:py-24">
        <div
          className={`max-w-full rounded-[8px] border-1 border-grey-med-4 bg-grey-med shadow-[0px_10px_25px_rgba(0,0,0,0.25)] ${
            wide ? "w-[888px]" : "w-[802px]"
          }`}
        >
          <div className="relative w-full overflow-hidden border-b-1 border-black p-12 sm:p-18">
            <Texture className="absolute top-[50%] left-[50%] min-h-full min-w-full max-w-[9999px] translate-x-[-50%] translate-y-[-50%] transform" />
            <div className="relative w-full">{top}</div>
          </div>
          <div className="w-full border-t-1 border-grey-med-5">{children}</div>
        </div>
      </div>
    </>
  )
}

export default WrapperModal
