import { ReactComponent as Coin } from "assets/img/coin.svg"
import { ReactComponent as Dollars } from "assets/img/dollars.svg"
import { ReactComponent as Wallet } from "assets/img/wallet.svg"
import { useModal } from "contexts/ModalContext"
import React, { useState } from "react"
import BgFire from "utils/bgs/BgFire"

const NavWallet = () => {
  const { setOpenWallet } = useModal()

  const [walletCoins] = useState(256000)
  const [walletDollars] = useState(256.0)

  const [activeCoins, setActiveCoins] = useState(true)

  return (
    <>
      <div className="flex items-center">
        <button
          className="relative flex h-[42px] overflow-hidden rounded-l-[4px] bg-grey-med-4 py-1 pl-1"
          onClick={() => setActiveCoins(!activeCoins)}
        >
          <div
            className={`absolute top-0 left-0 h-full w-full rounded-l-[4px] border-l-[1px] border-t-[1px] border-b-1 ${
              activeCoins ? "border-red-48" : "border-green-dark-48"
            }`}
          ></div>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent to-grey-med-4"></div>
          <div className="relative flex h-[40px] items-center rounded-l-[4px] bg-grey-dark-2">
            <div
              className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r to-transparent ${
                activeCoins ? "from-red-8" : "from-green-dark-8"
              }`}
            ></div>
            <div className="relative flex items-center gap-[16px] px-[12px]">
              <div className="flex items-center gap-[10px]">
                {activeCoins ? <Coin className="h-[24px]" /> : <Dollars className="-mx-[2px] h-[30px]" />}
                <div className="text-[14px] font-bold text-white">
                  {activeCoins ? (
                    walletCoins.toLocaleString("en-US")
                  ) : (
                    <>
                      ${Math.floor(walletDollars).toLocaleString("en-US")}
                      <span className="text-[12px] text-grey-light-4">
                        .
                        {(walletDollars * 100) % 100 === 0 ? (
                          "00"
                        ) : (walletDollars * 100) % 100 < 10 ? (
                          `0${Math.round((walletDollars * 100) % 100)}`
                        ) : (
                          <>{(walletDollars * 100) % 100}</>
                        )}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex h-[22px] items-center rounded-[4px] border-[1px] border-grey-med-4 bg-grey-med-2 px-[6px] pt-1 text-[10px] font-bold text-grey-light-3">
                {activeCoins ? "COINS" : "USD"}
              </div>
            </div>
          </div>
        </button>
        <button
          className="group relative flex h-[42px] items-start rounded-r-[4px] bg-red-dark"
          onClick={() => setOpenWallet(true)}
        >
          <div className="absolute top-0 left-0 bottom-2 w-full overflow-hidden rounded-r-[4px] bg-red group-hover:bg-red-light">
            <BgFire />
          </div>
          <div className="relative flex h-[40px] items-center gap-[6px] rounded-r-[4px] px-[16px]">
            <Wallet className="tr-a w-[16px] fill-current text-white group-hover:rotate-[-15deg] group-hover:scale-[1.25] group-hover:transform" />
            <div className="hidden text-[13px] font-bold text-white desktop:flex">Wallet</div>
          </div>
        </button>
      </div>
    </>
  )
}

export default NavWallet
