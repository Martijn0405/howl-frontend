import React from "react"

const ModalWalletBoxInfo = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <div className="flex w-full items-center px-12 pb-12 lg:pt-12">
        <div className="grid w-full grid-cols-1 lg:gap-2">
          <div className="w-full text-center text-14 font-semibold text-white lg:text-left">{title}</div>
          <div className="text-center text-12 font-semibold text-grey-light-5 lg:text-left">{text}</div>
        </div>
      </div>
    </>
  )
}

export default ModalWalletBoxInfo
