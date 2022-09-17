import ModalChatRulesTop from "components/modals/elements/ModalChatRulesTop"
import Modal from "components/modals/general/Modal"
import ModalBg from "components/modals/general/ModalBg"
import Wrapper from "components/wrapper/Wrapper"
import WrapperModal from "components/wrapper/WrapperModal"
import React, { useState } from "react"
import Button from "utils/buttons/Button"

const ModalChatRules = ({ open, handler }: { open: boolean; handler: any }) => {
  const [rules] = useState([
    "Be respectful to all users.",
    "Don't beg people for money, it's just sad.",
    "No advertising or mentioning other websites.",
    "Please speak the language of the respective room.",
    "Do not contact staff privately, we offer live support chat to assist you.",
    "Don't promote your creator code in chat, you will get muted."
  ])

  return (
    <>
      <Wrapper open={open}>
        <Modal open={open}>
          <ModalBg handler={handler} />
          <div className="relative w-full">
            <div className="tr-t relative w-full">
              <WrapperModal size={420} top={<ModalChatRulesTop handler={() => handler(false)} />}>
                <div className="px-[4px]0 grid w-full grid-cols-1 gap-[20px] py-[20px] md:px-[20px]">
                  <div className="grid w-full grid-cols-1 gap-[10px]">
                    {rules.map((rule: string, key: number) => (
                      <div
                        key={key}
                        className="w-full rounded-[4px] border-[1px] border-grey-med-4 bg-grey-med-2 px-[12px] py-[6px] text-center text-[12px] font-semibold text-grey-light-3"
                      >
                        {rule}
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full justify-center">
                    <div className="w-[150px]">
                      <Button active={true} handler={() => handler(false)} title={"Understood"} full />
                    </div>
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

export default ModalChatRules
