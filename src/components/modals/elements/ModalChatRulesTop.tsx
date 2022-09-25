import { ReactComponent as RulesRed } from "assets/img/rules_red.svg"
import ModalClose from "components/modals/general/ModalClose"
import React from "react"

const ModalChatRulesTop = ({ handler }: { handler: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-[12px] sm:grid-cols-[auto,1fr,auto]">
        <div className="hidden w-[42px] sm:flex"></div>
        <div className="grid w-full grid-cols-[auto,auto] items-center justify-start gap-[10px] sm:justify-center">
          <RulesRed className="w-[28px]" />
          <div className="text-[14px] font-bold text-white sm:text-[24px]">Chat Rules</div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalChatRulesTop
