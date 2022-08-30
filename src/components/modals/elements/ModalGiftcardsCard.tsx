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
        className={`tr w-full overflow-hidden rounded-6 border-1 ${
          amount === card.amount ? "border-red" : "border-grey-med-4 opacity-30"
        }`}
        onClick={() => handlerAmount(card.amount)}
      >
        <img alt="" className="w-full" src={card.image} />
      </button>
    </>
  )
}

export default ModalGiftcardsCard
