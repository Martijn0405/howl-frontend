import Modal from "components/modals/Modal"
import WrapperModal from "components/wrapper/WrapperModal"
import React from "react"
import Button from "utils/buttons/Button"

const ModalWallet = ({ open, handler }: { open: boolean; handler: any }) => {
  const onRedeem = () => {
    console.log("Redeem")
  }

  return (
    <>
      <Modal handler={handler} open={open}>
        <WrapperModal top={<div className="w-full"></div>}>
          <div className="grid w-full grid-cols-1 gap-24">
            <div className="grid w-full grid-cols-1 gap-12">
              <div className="w-full text-14 font-bold text-white">Steam Skins</div>
              <div className="grid w-full grid-cols-3 gap-12"></div>
            </div>
            <div className="grid w-full grid-cols-1 gap-12">
              <div className="flex w-full flex-wrap items-center justify-start gap-12">
                <div className="text-14 font-bold text-white">Cryptocurrencies</div>
                <div className="flex h-24 items-center rounded-4 bg-green-12 px-6 text-12 font-semibold text-green">
                  +40%
                </div>
              </div>
              <div className="grid w-full grid-cols-3 gap-12"></div>
            </div>
            <div className="grid w-full grid-cols-1 gap-12">
              <div className="w-full text-14 font-bold text-white">Giftcards</div>
              <div className="flex w-full items-center justify-start">
                <div className="grid w-[300px] max-w-full grid-cols-[1fr,auto] gap-12">
                  <div className="w-full"></div>
                  <Button handler={onRedeem} title={"Redeem"} />
                </div>
              </div>
              <div className="grid w-full grid-cols-4 gap-12"></div>
            </div>
          </div>
        </WrapperModal>
      </Modal>
    </>
  )
}

export default ModalWallet
