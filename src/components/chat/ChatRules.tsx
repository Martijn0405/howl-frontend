import { ReactComponent as Rules } from "assets/img/rules.svg"
import React from "react"

const ChatRules = () => {
  return (
    <>
      <button className="group flex h-38 w-36 items-start rounded-4 bg-black-24">
        <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-grey-med-4 group-hover:bg-grey-med-5">
          <Rules className="text-24" />
        </div>
      </button>
    </>
  )
}

export default ChatRules
