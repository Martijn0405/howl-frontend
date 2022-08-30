import React, { useState } from "react"

const InputField = ({ placeholder, value, handler }: { placeholder: string; value: string; handler: any }) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="group relative flex h-44 items-start rounded-4 bg-grey-dark">
        <div
          className={`tr-h relative flex w-full items-center rounded-4 border-1 border-grey-med-6 bg-grey-med px-16 group-hover:h-44 ${
            focus ? "h-44" : "h-42"
          }`}
        >
          <input
            className="w-full text-14 font-semibold text-white"
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
