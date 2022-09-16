import Texture from "assets/img/texture.png"
import React from "react"

const WrapperModal = ({ children, top, size }: { children: any; top: JSX.Element; size?: number }) => {
  return (
    <>
      <div className="w-full pt-[12px] pb-[24px] sm:py-[24px]">
        <div
          className={`max-w-full rounded-8 border-[1px] border-grey-med-4 bg-grey-med shadow-[0px_10px_25px_rgba(0,0,0,0.25)]`}
          style={{ width: `${size ? size : 800}px` }}
        >
          <div className="relative w-full overflow-hidden border-b-1 border-black p-[12px] sm:p-18">
            <img
              alt={""}
              className="absolute top-[50%] left-[50%] min-h-full min-w-full max-w-[9999px] translate-x-[-50%] translate-y-[-50%] transform object-cover"
              src={Texture}
            />
            <div className="relative w-full">{top}</div>
          </div>
          <div className="w-full border-t-[1px] border-grey-med-5">{children}</div>
        </div>
      </div>
    </>
  )
}

export default WrapperModal
