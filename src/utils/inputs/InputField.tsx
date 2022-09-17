import React, { useState } from "react"

const InputField = ({ placeholder, value, handler }: { placeholder: string; value: string; handler: any }) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="group relative flex h-[44px] items-start rounded-[4px] bg-grey-dark">
        <div
          className={`tr-h relative flex w-full items-center rounded-[4px] border-[1px] border-grey-med-6 bg-grey-med px-[16px] group-hover:h-[44px] ${
            focus ? "h-[44px]" : "h-[42px]"
          }`}
        >
          <input
            className="w-full text-[14px] font-semibold text-white"
            placeholder={placeholder}
            type="text"
            value={value}
            onBlur={() => setFocus(false)}
            onChange={(e) => handler(e.target.value)}
            onFocus={() => setFocus(true)}
          />
        </div>
      </div>
    </>
  )
}

export default InputField
