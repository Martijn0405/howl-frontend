import React from "react"

const ModalWalletBox = ({ children, shade, handler }: { children: any; shade?: JSX.Element; handler: any }) => {
  return (
    <>
      <button
        className="group relative flex h-[124px] items-start rounded-[6px] bg-grey-dark shadow-nav lg:h-[88px]"
        onClick={handler}
      >
        <div className="tr-h relative h-[122px] w-full overflow-hidden rounded-[6px] lg:h-[86px]">
          {shade}
          <div className="relative flex h-full w-full items-center border-[1px] border-transparent">
            <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[84px,1fr] lg:pt-0">{children}</div>
          </div>
        </div>
      </button>
    </>
  )
}

export default ModalWalletBox
