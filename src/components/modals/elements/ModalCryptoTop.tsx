import { ReactComponent as Btc } from "assets/img/btc.svg"
import { ReactComponent as Eth } from "assets/img/eth.svg"
import { ReactComponent as Ltc } from "assets/img/ltc.svg"
import ModalClose from "components/modals/ModalClose"
import { CryptoType } from "libs/enums"
import React from "react"

const ModalCryptoTop = ({ handler, deposit, type }: { handler: any; deposit?: boolean; type: CryptoType }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center justify-between gap-8 sm:grid-cols-[auto,1fr,auto] sm:gap-12">
        <div className="hidden w-42 sm:flex"></div>
        <div className="grid w-full grid-cols-[auto,auto,auto] items-center justify-start gap-8 sm:justify-center sm:gap-10">
          {
            {
              [CryptoType.Btc]: (
                <>
                  <div className="text-14 font-bold uppercase tracking-widest text-orange sm:text-20">Bitcoin</div>
                  <Btc className="col-start-1 row-start-1 h-30 w-auto sm:col-start-2 sm:h-46" />
                </>
              ),
              [CryptoType.Eth]: (
                <>
                  <div className="text-14 font-bold uppercase tracking-widest text-blue-light sm:text-20">Ethereum</div>
                  <Eth className="col-start-1 row-start-1 h-30 w-auto sm:col-start-2 sm:h-46" />
                </>
              ),
              [CryptoType.Ltc]: (
                <>
                  <div className="text-14 font-bold uppercase tracking-widest text-grey-blue sm:text-20">Litecoin</div>
                  <Ltc className="col-start-1 row-start-1 h-30 w-auto sm:col-start-2 sm:h-46" />
                </>
              )
            }[type]
          }
          <div className="text-14 uppercase tracking-widest text-white sm:text-20">
            {deposit ? "Deposit" : "Withdraw"}
          </div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalCryptoTop
