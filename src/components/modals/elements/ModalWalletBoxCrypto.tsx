import React from "react"

const ModalWalletBoxCrypto = ({ title, crypto }: { title: string; crypto: JSX.Element }) => {
  return (
    <>
      <div className="flex w-full items-center px-12 pb-12 lg:pt-12">
        <div className="grid w-full grid-cols-1 lg:gap-2">
          <div className="w-full text-center text-14 font-semibold text-white lg:text-left">{title}</div>
          <div className="flex w-full items-center justify-center gap-10 lg:justify-start">
            <div className="text-12 font-semibold text-grey-light-5">{crypto}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalWalletBoxCrypto
