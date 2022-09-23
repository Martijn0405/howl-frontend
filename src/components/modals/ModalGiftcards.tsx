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
import ModalBody from "components/modals/general/ModalBody"
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
          <div className="grid w-full grid-cols-1 gap-[26px] p-[20px]">
            <div className="grid w-full grid-cols-1 gap-[12px]">
              <div className="w-full text-center text-[16px] font-bold text-white">Select Giftcard Amount</div>
              <div className="flex w-full justify-center">
                <div className="flex items-center rounded-[4px] bg-green-12 py-[4px] px-[12px] text-[8px] font-semibold text-green sm:text-[12px]">
                  You receive a 40% Bonus on all giftcard purchases
                </div>
              </div>
            </div>
            <div className="group grid w-full grid-cols-1 gap-[16px]">
              <div className="grid w-full grid-cols-2 gap-[8px] sm:grid-cols-4 sm:gap-[16px]">
                {cards
                  .filter((_, key: number) => key < 4)
                  .map((card: GiftcardInterface, key: number) => (
                    <ModalGiftcardsCard key={key} amount={amount} card={card} handlerAmount={setAmount} />
                  ))}
              </div>
              <div className="grid w-full grid-cols-2 gap-[8px] sm:grid-cols-3 sm:gap-[16px]">
                {cards
                  .filter((_, key: number) => key > 3)
                  .map((card: GiftcardInterface, key: number) => (
                    <ModalGiftcardsCard key={key} amount={amount} card={card} handlerAmount={setAmount} />
                  ))}
              </div>
            </div>
            <div className="w-full text-center text-[12px] font-semibold italic text-grey-light-4">
              You will be redirected to <span className="text-[12px] text-white">Kinguin</span> to make your purchase
            </div>
          </div>
          <div className="w-full border-t-[1px] border-black">
            <div className="lg:gap-[4px]8 grid w-full grid-cols-1 items-center gap-[24px] border-t-[1px] border-grey-med-4 p-[20px] lg:grid-cols-[4fr,auto,5fr]">
              <div className="grid w-full grid-cols-1">
                <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-[12px] px-[20px] py-[8px]">
                  <div className="w-full text-[12px] font-semibold text-white">Amount</div>
                  <IoMdArrowForward className="text-[20px] text-grey-med-7" />
                  <div className="flex w-full items-center justify-center gap-[12px]">
                    <Coin />
                    <div className="text-[14px] font-semibold text-white">{amount * 1000}</div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-[12px] px-[20px] py-[8px]">
                  <div className="flex w-full items-center justify-start gap-[12px]">
                    <div className="text-[12px] font-semibold text-white">Bonus</div>
                    <div className="flex h-[24px] items-center rounded-[4px] border-[1px] border-green bg-green-12 px-[8px] text-[12px] font-semibold text-green">
                      40%
                    </div>
                  </div>
                  <IoMdArrowForward className="text-[20px] text-grey-med-7" />
                  <div className="flex w-full items-center justify-center gap-[12px]">
                    <Coin />
                    <div className="text-[14px] font-semibold text-white">{amount * 500}</div>
                  </div>
                </div>
              </div>
              <div className="hidden h-[48px] border-l-[1px] border-white opacity-[.08] lg:flex"></div>
              <div className="grid w-full grid-cols-1 gap-[16px]">
                <div className="flex w-full items-center justify-center">
                  <div className="grid h-[42px] w-full grid-cols-[1fr,auto] items-center rounded-[4px] border-[1px] border-grey-med-6">
                    <div className="flex h-full w-full items-center px-[16px] text-[14px] font-bold text-white">
                      You Receive
                    </div>
                    <div className="flex h-full items-center gap-[12px] border-l-[1px] border-grey-med-6 bg-grey-med-2 px-[16px]">
                      <Coin />
                      <div className="text-[14px] font-semibold text-white">{amount * 1000}</div>
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
