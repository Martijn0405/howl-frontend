import ModalClose from "components/modals/general/ModalClose"
import React from "react"

const ModalDiscordTop = ({ handler }: { handler: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-[12px] sm:grid-cols-[auto,1fr,auto]">
        <div className="hidden w-[42px] sm:flex"></div>
        <div className="grid w-full grid-cols-[auto,auto] items-center justify-start gap-[10px] sm:justify-center">
          <div className="text-[14px] font-bold uppercase tracking-widest text-white sm:text-[20px]">
            Join Our Discord
          </div>
        </div>
        <ModalClose handler={handler} />
      </div>
    </>
  )
}

export default ModalDiscordTop
