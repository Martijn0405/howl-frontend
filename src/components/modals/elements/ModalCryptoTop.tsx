import { ReactComponent as Btc } from "assets/img/btc.svg"
import { ReactComponent as Eth } from "assets/img/eth.svg"
import { ReactComponent as Ltc } from "assets/img/ltc.svg"
import ModalClose from "components/modals/general/ModalClose"
import { CryptoType } from "libs/enums"
import React from "react"

const ModalCryptoTop = ({ handler, deposit, type }: { handler: any; deposit?: boolean; type: CryptoType }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center justify-between gap-[8px] sm:grid-cols-[auto,1fr,auto] sm:gap-[12px]">
        <div className="hidden w-[42px] sm:flex"></div>
        <div className="grid w-full grid-cols-[auto,auto,auto] items-center justify-start gap-[8px] sm:justify-center sm:gap-[10px]">
          {
            {
              [CryptoType.Btc]: (
                <>
                  <div className="text-[14px] font-bold uppercase tracking-widest text-orange sm:text-[20px]">
                    Bitcoin
                  </div>
                  <Btc className="col-start-1 row-start-1 h-[30px] w-auto sm:col-start-2 sm:h-[46px]" />
                </>
              ),
              [CryptoType.Eth]: (
                <>
                  <div className="text-[14px] font-bold uppercase tracking-widest text-blue-light sm:text-[20px]">
                    Ethereum
                  </div>
                  <Eth className="col-start-1 row-start-1 h-[30px] w-auto sm:col-start-2 sm:h-[46px]" />
                </>
              ),
              [CryptoType.Ltc]: (
                <>
                  <div className="text-[14px] font-bold uppercase tracking-widest text-grey-blue sm:text-[20px]">
                    Litecoin
                  </div>
                  <Ltc className="col-start-1 row-start-1 h-[30px] w-auto sm:col-start-2 sm:h-[46px]" />
                </>
              )
            }[type]
          }

          <div className="text-[14px] uppercase tracking-widest text-white sm:text-[20px]">
            {deposit ? "Deposit" : "Withdraw"}
          </div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalCryptoTop
