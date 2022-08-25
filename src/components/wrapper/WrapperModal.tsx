import { ReactComponent as Texture } from "assets/img/texture.svg"
import React from "react"

const WrapperModal = ({ children, top }: { children: any; top: JSX.Element }) => {
  return (
    <>
      <div className="w-[802px] max-w-full overflow-hidden rounded-[8px] border-1 border-grey-med-4 bg-grey-med">
        <div className="relative w-full overflow-hidden border-b-1 border-black p-18">
          <Texture className="absolute top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] transform" />
          {top}
        </div>
        <div className="w-full border-t-1 border-grey-med-5 p-20">{children}</div>
      </div>
    </>
  )
}

export default WrapperModal
