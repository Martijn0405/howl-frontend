import BannerCoinflip from "assets/img/gamemodes/coinflip.png"
import { ReactComponent as IconCoinflip } from "assets/img/gamemodes/coinflip.svg"
import BannerJackpot from "assets/img/gamemodes/jackpot.png"
import { ReactComponent as IconJackpot } from "assets/img/gamemodes/jackpot.svg"
import { ReactComponent as IconLive } from "assets/img/gamemodes/live.svg"
import BannerSlots from "assets/img/gamemodes/slots.png"
import { ReactComponent as IconSlots } from "assets/img/gamemodes/slots.svg"
import { ReactComponent as IconWheel } from "assets/img/gamemodes/wheel.svg"
import ModalMobile from "components/modals/general/ModalMobile"
import Wrapper from "components/wrapper/Wrapper"
import { URL } from "libs/constants"
import { GameType } from "libs/enums"
import { GameInterface } from "libs/interfaces"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const ModalGames = ({ open, handler }: { open: boolean; handler: any }) => {
  const [games] = useState<GameInterface[]>([
    {
      title: "Slots",
      icon: <IconSlots className="fill-current text-slots" />,
      banner: BannerSlots,
      new: true,
      link: URL.SLOTS,
      type: GameType.Slots
    },
    {
      title: "Live Games",
      icon: <IconLive className="fill-current text-live" />,
      banner: BannerCoinflip,
      new: true,
      link: URL.LIVE,
      type: GameType.Live
    },
    {
      title: "Jackpot",
      icon: <IconJackpot className="fill-current text-jackpot" />,
      banner: BannerJackpot,
      amount: 1502.3,
      link: URL.JACKPOT,
      type: GameType.Jackpot
    },
    {
      title: "Coinflip",
      icon: <IconCoinflip className="fill-current text-coinflip" />,
      banner: BannerCoinflip,
      amount: 1502.3,
      link: URL.COINFLIP,
      type: GameType.Coinflip
    },
    {
      title: "Wheel",
      icon: <IconWheel className="fill-current text-wheel" />,
      banner: BannerJackpot,
      hot: true,
      link: URL.WHEEL,
      type: GameType.Wheel
    }
  ])

  return (
    <>
      <Wrapper open={open}>
        <ModalMobile handler={handler}>
          <div className="grid w-full grid-cols-4 gap-12 p-24">
            {games.map((game, key) => (
              <Link
                key={key}
                className="relative w-full overflow-hidden rounded-4 pt-[67%]"
                to={game.link}
                onClick={() => handler(false)}
              >
                {
                  {
                    [GameType.Coinflip]: (
                      <>
                        <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-coinflip-dark"></div>
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                        <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                        <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-4 bg-gradient-to-t from-coinflip to-transparent opacity-[.4]"></div>
                      </>
                    ),
                    [GameType.Jackpot]: (
                      <>
                        <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-jackpot-dark"></div>
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                        <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                        <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-4 bg-gradient-to-t from-jackpot to-transparent opacity-[.4]"></div>
                      </>
                    ),
                    [GameType.Live]: (
                      <>
                        <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-live-dark"></div>
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                        <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                        <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-4 bg-gradient-to-t from-live to-transparent opacity-[.4]"></div>
                      </>
                    ),
                    [GameType.Slots]: (
                      <>
                        <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-slots-dark"></div>
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                        <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                        <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-4 bg-gradient-to-t from-slots to-transparent opacity-[.4]"></div>
                      </>
                    ),
                    [GameType.Wheel]: (
                      <>
                        <div className="absolute top-0 left-0 h-full w-full rounded-4 border-1 border-wheel-dark"></div>
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                        <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                        <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-4 bg-gradient-to-t from-wheel to-transparent opacity-[.4]"></div>
                      </>
                    )
                  }[game.type]
                }
                <div className=" absolute bottom-1 left-1 right-1 flex items-center justify-center gap-8 px-8 py-6">
                  {game.icon}
                  <div className="pt-2 text-14 font-semibold text-white">{game.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </ModalMobile>
      </Wrapper>
    </>
  )
}

export default ModalGames
