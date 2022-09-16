import React from "react"

const ModalWalletBoxInfo = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <div className="flex w-full items-center px-[12px] pb-[12px] lg:pt-[12px]">
        <div className="grid w-full grid-cols-1 lg:gap-[2px]">
          <div className="w-full text-center text-[14px] font-semibold text-white lg:text-left">{title}</div>
          <div className="text-center text-[12px] font-semibold text-grey-light-5 lg:text-left">{text}</div>
        </div>
      </div>
    </>
  )
}

export default ModalWalletBoxInfo
