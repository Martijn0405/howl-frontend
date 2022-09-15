import Cc from "assets/img/cc.png"
import ModalClose from "components/modals/general/ModalClose"
import { SkinType } from "libs/enums"
import React from "react"

const ModalSkinsTop = ({ handler, type, deposit }: { handler: any; type: SkinType; deposit: boolean }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-12 sm:grid-cols-[auto,1fr,auto]">
        <div className="hidden w-42 sm:flex"></div>
        <div className="grid w-full grid-cols-[auto,auto,auto] items-center justify-start gap-10 sm:justify-center">
          {
            {
              [SkinType.Csgo]: <div className="text-16 uppercase tracking-widest text-white sm:text-20">CS:GO</div>,
              [SkinType.Dota]: <div className="text-16 uppercase tracking-widest text-white sm:text-20">Dota</div>,
              [SkinType.Rust]: <div className="text-16 uppercase tracking-widest text-white sm:text-20">Rust</div>
            }[type]
          }

          <img alt="" className="col-start-1 row-start-1 h-32 sm:col-start-2 sm:h-40" src={Cc} />
          <div className="text-16 font-bold uppercase tracking-widest text-red sm:text-20">
            {deposit ? "Deposit" : "Withdraw"}
          </div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalSkinsTop
