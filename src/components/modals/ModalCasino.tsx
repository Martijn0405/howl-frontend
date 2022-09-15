import CasinoLive from "assets/img/news/casino/live.png"
import CasinoSlots from "assets/img/news/casino/slots.png"
import CasinoWithdraw from "assets/img/news/casino/withdraw.png"
import ModalCasinoItem from "components/modals/elements/ModalCasinoItem"
import ModalCasinoTop from "components/modals/elements/ModalCasinoTop"
import Modal from "components/modals/general/Modal"
import ModalBg from "components/modals/general/ModalBg"
import Wrapper from "components/wrapper/Wrapper"
import WrapperModal from "components/wrapper/WrapperModal"
import { useModal } from "contexts/ModalContext"
import { URL } from "libs/constants"
import React from "react"

const ModalCasino = ({ open, handler, handlerSide }: { open: boolean; handler: any; handlerSide: any }) => {
  const { setOpenWallet } = useModal()

  return (
    <>
      <Wrapper open={open}>
        <Modal open={open} right>
          <ModalBg handler={handler} />
          <div className="relative w-full">
            <div className="tr-t relative w-full">
              <WrapperModal top={<ModalCasinoTop handler={() => handler(false)} />}>
                <div className="grid w-full grid-cols-1 gap-24 py-20 px-40 md:px-20">
                  <div className="grid w-full grid-cols-3 gap-16">
                    <ModalCasinoItem
                      handlerClose={() => {
                        handler(false)

                        if (handlerSide) {
                          handlerSide()
                        }
                      }}
                      border={"border-purple-36"}
                      button={"Play Slots"}
                      image={CasinoSlots}
                      link={URL.SLOTS}
                      text={"Over 3000+ Slots are now available to play on Howl."}
                      title={"Slots Have Arrived!"}
                    />
                    <ModalCasinoItem
                      handlerClose={() => {
                        handler(false)

                        if (handlerSide) {
                          handlerSide()
                        }
                      }}
                      border={"border-red-36"}
                      button={"Try Your Luck"}
                      image={CasinoLive}
                      link={URL.LIVE}
                      text={"You can now play a variety of Live Games on Howl."}
                      title={"Play Live Games!"}
                    />
                    <ModalCasinoItem
                      handlerClose={() => {
                        handler(false)

                        if (handlerSide) {
                          handlerSide()
                        }
                      }}
                      border={"border-yellow-36"}
                      button={"Take a Look"}
                      handler={() => setOpenWallet(true)}
                      image={CasinoWithdraw}
                      text={"Crypto Withdrawals are now available."}
                      title={"Withdraw to Crypto!"}
                    />
                  </div>
                </div>
              </WrapperModal>
            </div>
          </div>
        </Modal>
      </Wrapper>
    </>
  )
}

export default ModalCasino
