import { GiftcardInterface } from "libs/interfaces"
import React from "react"

const ModalGiftcardsCard = ({
  amount,
  card,
  handlerAmount
}: {
  amount: number
  card: GiftcardInterface
  handlerAmount: any
}) => {
  return (
    <>
      <button
        className={`tr-o relative w-full overflow-hidden rounded-[6px] ${
          amount === card.amount ? "" : "hover:!opacity-100 group-hover:opacity-30"
        }`}
        onClick={() => handlerAmount(card.amount)}
      >
        <img alt="" className="w-full" src={card.image} />
        <div
          className={`tr-c absolute top-0 left-0 h-full w-full rounded-[6px] border-2 ${
            amount === card.amount ? "border-red" : "border-grey-med-4"
          }`}
        ></div>
      </button>
    </>
  )
}

export default ModalGiftcardsCard
