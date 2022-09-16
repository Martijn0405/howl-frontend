import { ReactComponent as Coin } from "assets/img/coin.svg"
import { useModal } from "contexts/ModalContext"
import React, { useState } from "react"
import { IoLogoUsd, IoWallet } from "react-icons/io5"
import BgFire from "utils/bgs/BgFire"

const NavWallet = () => {
  const { setOpenWallet } = useModal()

  const [walletCoins] = useState(256000)
  const [walletDollars] = useState(256)

  const [activeCoins, setActiveCoins] = useState(true)

  return (
    <>
      <div className="flex items-center">
        <button
          className="relative flex h-[42px] overflow-hidden rounded-l-[4px] bg-grey-med-4 py-1 pl-1"
          onClick={() => setActiveCoins(!activeCoins)}
        >
          <div className="absolute top-0 left-0 h-full w-full rounded-l-[4px] border-l-[1px] border-t-[1px] border-b-1 border-red"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent to-grey-med-4"></div>
          <div className="relative flex h-[40px] items-center rounded-l-[4px] bg-grey-dark-2">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red to-transparent opacity-10"></div>
            <div className="relative flex items-center gap-[16px] px-[12px]">
              <div className="flex items-center gap-[10px]">
                {activeCoins ? <Coin className="h-[24px]" /> : <IoLogoUsd className="text-[18px] text-red" />}
                <div className="text-[14px] font-bold text-white">
                  {activeCoins ? walletCoins.toLocaleString("en-US") : walletDollars.toLocaleString("en-US")}
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
            <IoWallet className="tr-a text-[16px] text-white group-hover:rotate-[-15deg] group-hover:scale-[1.1] group-hover:transform" />
            <div className="hidden text-[13px] font-bold text-white desktop:flex">Wallet</div>
          </div>
        </button>
      </div>
    </>
  )
}

export default NavWallet
