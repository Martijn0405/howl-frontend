import Cc from "assets/img/cc.png"
import ModalClose from "components/modals/general/ModalClose"
import { SkinType } from "libs/enums"
import React from "react"

const ModalSkinsTop = ({ handler, type, deposit }: { handler: any; type: SkinType; deposit: boolean }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-[12px] sm:grid-cols-[auto,1fr,auto]">
        <div className="hidden w-[42px] sm:flex"></div>
        <div className="grid w-full grid-cols-[auto,auto,auto] items-center justify-start gap-[10px] sm:justify-center">
          {
            {
              [SkinType.Csgo]: (
                <div className="text-[16px] uppercase tracking-widest text-white sm:text-[20px]">CS:GO</div>
              ),
              [SkinType.Dota]: (
                <div className="text-[16px] uppercase tracking-widest text-white sm:text-[20px]">Dota</div>
              ),
              [SkinType.Rust]: (
                <div className="text-[16px] uppercase tracking-widest text-white sm:text-[20px]">Rust</div>
              )
            }[type]
          }

          <img alt="" className="col-start-1 row-start-1 h-[32px] sm:col-start-2 sm:h-[40px]" src={Cc} />
          <div className="text-[16px] font-bold uppercase tracking-widest text-red sm:text-[20px]">
            {deposit ? "Deposit" : "Withdraw"}
          </div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalSkinsTop
