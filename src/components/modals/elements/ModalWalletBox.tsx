import React from "react"

const ModalWalletBox = ({ children, shade, handler }: { children: any; shade?: JSX.Element; handler: any }) => {
  return (
    <>
      <button
        className="group relative flex h-[124px] items-start rounded-[6px] bg-grey-dark lg:h-[88px]"
        onClick={handler}
      >
        <div className="tr-h relative h-[122px] w-full overflow-hidden rounded-[6px] group-hover:h-[124px] lg:h-[86px] lg:group-hover:h-[88px]">
          {shade}
          <div className="flex h-full w-full items-center rounded-[6px] border-[1px] border-grey-med-6 bg-grey-med">
            <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[84px,1fr] lg:pt-0">{children}</div>
          </div>
        </div>
      </button>
    </>
  )
}

export default ModalWalletBox
