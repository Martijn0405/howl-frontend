import { CryptoType } from "libs/enums"
import React from "react"

const ModalCryptoBalance = ({ type, balance }: { type: CryptoType; balance: number }) => {
  return (
    <>
      <div className="flex items-center gap-[6px]">
        <div className="text-[12px] font-bold text-grey-light-4">${balance}</div>
        <div className="h-[14px] border-l-[1px] border-grey-med-7"></div>
        {
          {
            [CryptoType.Btc]: (
              <div className="text-[12px] font-bold text-yellow">BTC {(balance / 35000).toFixed(10)}</div>
            ),
            [CryptoType.Eth]: (
              <div className="text-[12px] font-bold text-blue-light">ETH {(balance / 2400).toFixed(10)}</div>
            ),
            [CryptoType.Ltc]: (
              <div className="text-[12px] font-bold text-grey-blue">LTC {(balance / 1400).toFixed(10)}</div>
            )
          }[type]
        }
      </div>
    </>
  )
}

export default ModalCryptoBalance
