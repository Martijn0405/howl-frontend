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
                <div className="flex w-full justify-center py-20 px-40 md:px-20">
                  <div className="grid w-[300px] max-w-full grid-cols-1 gap-20">
                    <div className="relative w-full pt-[45%]">
                      <img
                        className="absolute top-[-25px] left-[50%]
                          translate-x-[-45%] transform"
                        alt=""
                        src={Discord}
                      />
                    </div>
                    <div className="grid w-full grid-cols-1 gap-6">
                      <div className="w-full text-center text-16 font-bold text-white">Access Your Rewards!</div>
                      <div className="w-full text-center text-12 font-semibold text-grey-light-4">
                        To open our <span className="text-12 text-grey-light-5">Daily Case</span> and claim{" "}
                        <span className="text-12 text-grey-light-5">Chat Rains</span> you must be a{" "}
                        <span className="text-12 text-grey-light-5">Member</span> in our{" "}
                        <span
                          className="cursor-pointer text-12 text-discord"
                          onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                        >
                          Discord
                        </span>
                        .
                      </div>
                    </div>
                    <div className="flex w-full justify-center">
                      <div className="flex h-38 w-[160px] items-start rounded-4 bg-discord-dark">
                        <button
                          className="flex h-36 w-full items-center justify-center gap-10 rounded-4 bg-discord"
                          onClick={(e) => openLink(e, SOCIAL.DISCORD)}
                        >
                          <FaDiscord className="text-16 text-white" />
                          <div className="text-13 font-bold text-white">Join Discord</div>
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
