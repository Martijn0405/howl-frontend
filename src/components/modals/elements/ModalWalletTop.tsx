import ModalClose from "components/modals/general/ModalClose"
import { WalletType } from "libs/enums"
import { WalletInterface } from "libs/interfaces"
import { RippleButton } from "libs/ripples"
import React, { useState } from "react"
import { MdLogin, MdLogout } from "react-icons/md"

const ModalWalletTop = ({ type, handler, handlerType }: { type: WalletType; handler: any; handlerType: any }) => {
  const [tabs] = useState<WalletInterface[]>([
    { title: "Deposit", type: WalletType.Deposit },
    { title: "Withdraw", type: WalletType.Withdraw }
  ])

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center overflow-hidden rounded-4 bg-grey-med-2">
          {tabs.map((tab: WalletInterface, key: number) => (
            <RippleButton key={key}>
              <button
                className={`tr-c group flex h-42 items-center justify-center gap-8 border-b-2 px-12 sm:w-[150px] sm:gap-12 sm:px-16 ${
                  type === tab.type
                    ? "border-red bg-grey-med-4"
                    : "border-black-32 hover:border-red hover:bg-grey-med-4"
                }`}
                onClick={() => handlerType(tab.type)}
              >
                {
                  {
                    [WalletType.Deposit]: (
                      <MdLogin
                        className={`tr-c rotate-[90deg] transform text-18 ${
                          type === tab.type ? "text-red" : "text-grey-light-4 group-hover:text-red"
                        }`}
                      />
                    ),
                    [WalletType.Withdraw]: (
                      <MdLogout
                        className={`tr-c rotate-[-90deg] transform text-18 ${
                          type === tab.type ? "text-red" : "text-grey-light-4 group-hover:text-red"
                        }`}
                      />
                    )
                  }[tab.type]
                }
                <div
                  className={`tr-c text-14 font-bold ${
                    type === tab.type ? "text-white" : "text-grey-light-4 group-hover:text-white"
                  }`}
                >
                  {tab.title}
                </div>
              </button>
            </RippleButton>
          ))}
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalWalletTop
