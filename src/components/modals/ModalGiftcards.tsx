import { ReactComponent as Coin } from "assets/img/coin.svg"
import GiftCard10 from "assets/img/giftcards/giftcard10.png"
import GiftCard100 from "assets/img/giftcards/giftcard100.png"
import GiftCard25 from "assets/img/giftcards/giftcard25.png"
import GiftCard250 from "assets/img/giftcards/giftcard250.png"
import GiftCard5 from "assets/img/giftcards/giftcard5.png"
import GiftCard50 from "assets/img/giftcards/giftcard50.png"
import GiftCard500 from "assets/img/giftcards/giftcard500.png"
import ModalGiftcardsCard from "components/modals/elements/ModalGiftcardsCard"
import ModalGiftcardsTop from "components/modals/elements/ModalGiftcardsTop"
import ModalBody from "components/modals/ModalBody"
import WrapperModal from "components/wrapper/WrapperModal"
import { GiftcardInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdArrowForward } from "react-icons/io"
import Button from "utils/buttons/Button"

const ModalGiftcards = ({ open, handler }: { open: boolean; handler: any }) => {
  const [amount, setAmount] = useState(0)

  const [cards] = useState<GiftcardInterface[]>([
    { image: GiftCard5, amount: 5 },
    { image: GiftCard10, amount: 10 },
    { image: GiftCard25, amount: 25 },
    { image: GiftCard50, amount: 50 },
    { image: GiftCard100, amount: 100 },
    { image: GiftCard250, amount: 250 },
    { image: GiftCard500, amount: 500 }
  ])

  return (
    <>
      <ModalBody open={open}>
        <WrapperModal top={<ModalGiftcardsTop handler={handler} />}>
          <div className="grid w-full grid-cols-1 gap-26 p-20">
            <div className="grid w-full grid-cols-1 gap-12">
              <div className="w-full text-center text-16 font-bold text-white">Select Giftcard Amount</div>
              <div className="flex w-full justify-center">
                <div className="flex items-center rounded-4 bg-green-12 py-4 px-12 text-[8px] font-semibold text-green sm:text-12">
                  You receive a 40% Bonus on all giftcard purchases
                </div>
              </div>
            </div>
            <div className="group grid w-full grid-cols-1 gap-16">
              <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-16">
                {cards
                  .filter((_, key: number) => key < 4)
                  .map((card: GiftcardInterface, key: number) => (
                    <ModalGiftcardsCard key={key} amount={amount} card={card} handlerAmount={setAmount} />
                  ))}
              </div>
              <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
                {cards
                  .filter((_, key: number) => key > 3)
                  .map((card: GiftcardInterface, key: number) => (
                    <ModalGiftcardsCard key={key} amount={amount} card={card} handlerAmount={setAmount} />
                  ))}
              </div>
            </div>
            <div className="w-full text-center text-12 font-semibold italic text-grey-light-4">
              You will be redirected to <span className="text-12 text-white">Kinguin</span> to make your purchase
            </div>
          </div>
          <div className="w-full border-t-1 border-black">
            <div className="grid w-full grid-cols-1 items-center gap-24 border-t-1 border-grey-med-4 p-20 lg:grid-cols-[4fr,auto,5fr] lg:gap-48">
              <div className="grid w-full grid-cols-1">
                <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-12 px-20 py-8">
                  <div className="w-full text-12 font-semibold text-white">Amount</div>
                  <IoMdArrowForward className="text-20 text-grey-med-7" />
                  <div className="flex w-full items-center justify-center gap-12">
                    <Coin />
                    <div className="text-14 font-semibold text-white">{amount * 1000}</div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-12 px-20 py-8">
                  <div className="flex w-full items-center justify-start gap-12">
                    <div className="text-12 font-semibold text-white">Bonus</div>
                    <div className="flex h-24 items-center rounded-4 border-1 border-green bg-green-12 px-8 text-12 font-semibold text-green">
                      40%
                    </div>
                  </div>
                  <IoMdArrowForward className="text-20 text-grey-med-7" />
                  <div className="flex w-full items-center justify-center gap-12">
                    <Coin />
                    <div className="text-14 font-semibold text-white">{amount * 500}</div>
                  </div>
                </div>
              </div>
              <div className="hidden h-48 border-l-1 border-white opacity-[.08] lg:flex"></div>
              <div className="grid w-full grid-cols-1 gap-16">
                <div className="flex w-full items-center justify-center">
                  <div className="grid h-42 w-[272px] grid-cols-[1fr,auto] items-center rounded-4 border-1 border-grey-med-6">
                    <div className="flex h-full w-full items-center px-16 text-14 font-bold text-white">
                      You Receive
                    </div>
                    <div className="flex h-full items-center gap-12 border-l-1 border-grey-med-6 bg-grey-med-2 px-16">
                      <Coin />
                      <div className="text-14 font-semibold text-white">{amount * 1000}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <Button active={amount > 0} handler={undefined} title={"Purchase Gift Card"} full />
                </div>
              </div>
            </div>
          </div>
        </WrapperModal>
      </ModalBody>
    </>
  )
}

export default ModalGiftcards
