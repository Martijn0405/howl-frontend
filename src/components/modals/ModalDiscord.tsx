import { openLink } from "api/integration/functions"
import Discord from "assets/img/discord.png"
import ModalDiscordTop from "components/modals/elements/ModalDiscord"
import Modal from "components/modals/general/Modal"
import ModalBg from "components/modals/general/ModalBg"
import Wrapper from "components/wrapper/Wrapper"
import WrapperModal from "components/wrapper/WrapperModal"
import { SOCIAL } from "libs/constants"
import React from "react"
import { FaDiscord } from "react-icons/fa"

const ModalDiscord = ({ open, handler }: { open: boolean; handler: any }) => {
  return (
    <>
      <Wrapper open={open}>
        <Modal open={open}>
          <ModalBg handler={handler} />
          <div className="relative w-full">
            <div className="tr-t relative w-full">
              <WrapperModal size={420} top={<ModalDiscordTop handler={() => handler(false)} />}>
                <div className="flex w-full justify-center px-[40px] py-[20px] md:px-[20px]">
                  <div className="grid w-[300px] max-w-full grid-cols-1 gap-[20px]">
                    <div className="relative w-full pt-[45%]">
                      <img
                        className="absolute -top-[25px] left-[50%]
                          max-h-[calc(100%+2rem)] translate-x-[-45%] transform"
                        alt=""
                        src={Discord}
                      />
                    </div>
                    <div className="grid w-full grid-cols-1 gap-[6px]">
                      <div className="w-full text-center text-[16px] font-bold text-white">Access Your Rewards!</div>
                      <div className="w-full text-center text-[12px] font-semibold text-grey-light-4">
                        To open our <span className="text-[12px] text-grey-light-5">Daily Case</span> and claim{" "}
                        <span className="text-[12px] text-grey-light-5">Chat Rains</span> you must be a{" "}
                        <span className="text-[12px] text-grey-light-5">Member</span> in our{" "}
                        <span
                          className="cursor-pointer text-[12px] text-discord"
                          onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                        >
                          Discord
                        </span>
                        .
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <div className="flex h-[38px] items-start rounded-[4px] bg-discord-dark">
                        <button
                          className="flex h-[36px] w-full items-center justify-center gap-[10px] rounded-[4px] bg-discord px-[16px]"
                          onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                        >
                          <FaDiscord className="text-[16px] text-white" />
                          <div className="text-[13px] font-bold text-white">Join Discord</div>
                        </button>
                      </div>
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

export default ModalDiscord
