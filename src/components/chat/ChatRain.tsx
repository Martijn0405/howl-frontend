import RainBanner from "assets/img/rain/banner.png"
import { ReactComponent as RainCoin } from "assets/img/rain/coin.svg"
import RainCoins from "assets/img/rain/coins.png"
import { ReactComponent as RainFrame } from "assets/img/rain/frame.svg"
import { ReactComponent as RainTimer } from "assets/img/rain/timer.svg"
import { RippleButton } from "libs/ripples"
import React from "react"
import { FaInfo } from "react-icons/fa"
import { MdOutlineTimer, MdPerson } from "react-icons/md"

const ChatRain = () => {
  const onRain = () => {
    console.log("Join rain")
  }

  return (
    <>
      <div className="w-full border-b-2 border-grey-dark py-[12px] px-[24px]">
        <div className="relative w-full">
          <div className="absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] border-red-36"></div>
          <div className="absolute top-0 left-0 h-full w-full rounded-[4px] bg-gradient-to-r from-transparent to-grey-med-3"></div>
          <div className="absolute top-[1px] left-[1px] bottom-[1px] right-[1px] rounded-[3px] bg-grey-dark"></div>
          <div className="relative w-full rounded-[4px]">
            <div className="grid w-full grid-cols-[1fr,auto] items-center gap-[12px] px-[12px] py-[8px]">
              <div className="flex w-full justify-start">
                <div className="flex items-center gap-[8px]">
                  <div className="text-[20px] font-bold text-red">IT&apos;S RAINING</div>
                  <div className="group relative cursor-pointer">
                    <div className="tr-c flex h-[16px] w-[16px] items-center justify-center rounded-full bg-grey-med-2 group-hover:bg-grey-med-5">
                      <FaInfo className="tr-c text-[8px] text-grey-light-4 group-hover:text-white" />
                    </div>
                    <div className="absolute -left-[20px] bottom-[36px] hidden w-[360px] rounded-[4px] border-[1px] border-grey-med-4 bg-grey p-[12px] text-[12px] font-semibold text-grey-light-4 group-hover:block">
                      <span className="text-[12px] text-grey-light-5">Chat Rain</span> has been launched on Howl! Every{" "}
                      <span className="text-[12px] text-grey-light-5">1-2 hours</span> we take{" "}
                      <span className="text-[12px] text-grey-light-5">3% of rake</span> and pay it out through chat
                      rain. The amount awarded to each user is based on how{" "}
                      <span className="text-[12px] text-grey-light-5">active</span> you are on the website since the
                      previous rain, it is <span className="text-grey-light-5not text-[12px]"></span> based on your{" "}
                      <span className="text-[12px] text-grey-light-5">wager</span>
                      amount.
                      <div className="absolute bottom-0 left-[19px] h-[16px] w-[16px] translate-y-[50%] rotate-[45deg] transform rounded-br-4 border-r-[1px] border-b-1 border-grey-med-4 bg-grey"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[26px] w-full">
                <RainTimer className="absolute top-0 right-0 h-[26px] w-auto" />
                <div className="relative flex h-[26px] items-center gap-[6px] px-[10px]">
                  <MdOutlineTimer className="text-[14px] text-red" />
                  <div className="w-[30px] text-[12px] font-semibold text-white">03:15</div>
                </div>
              </div>
            </div>
            <div className="relative w-full border-t-[1px] border-black-24">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-red-12 to-transparent"></div>
              <img
                alt=""
                className="absolute top-0 left-0 h-full w-full object-cover mix-blend-overlay"
                src={RainBanner}
              />
              <div className="relative grid w-full grid-cols-[1fr,auto] gap-[16px] py-[12px] pr-[12px]">
                <div className="relative grid h-[54px] w-full grid-cols-[auto,1fr] items-center gap-[16px] rounded-r-[4px] bg-gradient-to-r from-transparent to-white-4 pl-[12px]">
                  <div className="relative h-[56px] w-[56px]">
                    <div className="absolute top-[50%] left-[50%] h-[130px] w-[130px] max-w-none translate-y-[-50%] translate-x-[-50%] transform">
                      <img alt="" className="absolute top-0 left-0 h-full w-full max-w-none" src={RainCoins} />
                      <RainFrame className="absolute left-[17%] top-[17%] h-auto w-[66%]" />
                      <RainCoin className="absolute right-[28%] top-[28%] h-auto w-[26%]" />
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 gap-[2px]">
                    <div className="w-full text-[10px] font-semibold text-grey-light-4">Rain Value</div>
                    <div className="w-full text-[18px] font-bold text-white">24,045</div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-[4px]">
                  <div className="flex w-full items-center justify-center gap-[4px]">
                    <MdPerson className="text-[16px] text-red" />
                    <div className="text-[12px] font-semibold text-grey-light-4">
                      <span className="text-[12px] text-white">57</span> Joined
                    </div>
                  </div>
                  <div className="h-[30px] w-[90px] rounded-[4px] bg-red-dark">
                    <RippleButton className="w-full rounded-[4px]">
                      <button
                        className="flex h-[28px] w-full items-center justify-center rounded-[4px] bg-red text-[12px] font-bold text-white hover:bg-red-light"
                        onClick={onRain}
                      >
                        Join Rain
                      </button>
                    </RippleButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatRain
