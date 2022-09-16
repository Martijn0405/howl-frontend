import { ReactComponent as Rules } from "assets/img/rules.svg"
import { useModal } from "contexts/ModalContext"
import React from "react"

const ChatRules = () => {
  const { setOpenRules } = useModal()

  return (
    <>
      <button
        className="group flex h-[38px] w-[36px] items-start rounded-[4px] bg-black-24"
        onClick={() => setOpenRules(true)}
      >
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] bg-grey-med-4 group-hover:bg-grey-med-5">
          <Rules className="text-[24px]" />
        </div>
      </button>
    </>
  )
}

export default ChatRules
