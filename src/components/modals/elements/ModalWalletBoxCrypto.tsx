import React from "react"

const ModalWalletBoxCrypto = ({ title, crypto }: { title: string; crypto: JSX.Element }) => {
  return (
    <>
      <div className="flex w-full items-center px-[12px] pb-[12px] lg:pt-[12px]">
        <div className="grid w-full grid-cols-1 lg:gap-[2px]">
          <div className="w-full text-center text-[14px] font-semibold text-white lg:text-left">{title}</div>
          <div className="flex w-full items-center justify-center gap-[10px] lg:justify-start">
            <div className="text-[12px] font-semibold text-grey-light-5">{crypto}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalWalletBoxCrypto
