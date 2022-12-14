import BannerCoinflip from "assets/img/gamemodes/coinflip.png"
import { ReactComponent as IconCoinflip } from "assets/img/gamemodes/coinflip.svg"
import BannerJackpot from "assets/img/gamemodes/jackpot.png"
import { ReactComponent as IconJackpot } from "assets/img/gamemodes/jackpot.svg"
import { ReactComponent as IconLive } from "assets/img/gamemodes/live.svg"
import BannerSlots from "assets/img/gamemodes/slots.png"
import { ReactComponent as IconSlots } from "assets/img/gamemodes/slots.svg"
import { ReactComponent as IconWheel } from "assets/img/gamemodes/wheel.svg"
import { ReactComponent as IconGames } from "assets/img/games.svg"
import NavSwitcherGame from "components/nav/switcher/NavSwitcherGame"
import Wrapper from "components/wrapper/Wrapper"
import { useModal } from "contexts/ModalContext"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { GameType } from "libs/enums"
import { GameInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowUp } from "react-icons/md"

const NavSwitcher = ({ mobile }: { mobile?: boolean }) => {
  const { path } = useProps()
  const { openGames, setOpenGames } = useModal()

  const [active, setActive] = useState(GameType.None)

  const [games] = useState<GameInterface[]>([
    {
      title: "Slots",
      icon: <IconSlots className="h-[16px] w-[16px] fill-current text-slots" />,
      banner: BannerSlots,
      new: true,
      link: URL.SLOTS,
      type: GameType.Slots
    },
    {
      title: "Live Games",
      icon: <IconLive className="h-[16px] w-[16px] fill-current text-live" />,
      banner: BannerCoinflip,
      new: true,
      link: URL.LIVE,
      type: GameType.Live
    },
    {
      title: "Jackpot",
      icon: <IconJackpot className="h-[16px] w-[16px] fill-current text-jackpot" />,
      banner: BannerJackpot,
      amount: 1502.3,
      link: URL.JACKPOT,
      type: GameType.Jackpot
    },
    {
      title: "Coinflip",
      icon: <IconCoinflip className="h-[16px] w-[16px] fill-current text-coinflip" />,
      banner: BannerCoinflip,
      amount: 1502.3,
      link: URL.COINFLIP,
      type: GameType.Coinflip
    },
    {
      title: "Wheel",
      icon: <IconWheel className="h-[16px] w-[16px] fill-current text-wheel" />,
      banner: BannerJackpot,
      hot: true,
      link: URL.WHEEL,
      type: GameType.Wheel
    }
  ])

  useEffect(() => {
    switch (path) {
      case URL.COINFLIP:
        setActive(GameType.Coinflip)
        break
      case URL.JACKPOT:
        setActive(GameType.Jackpot)
        break
      case URL.SLOTS:
        setActive(GameType.Slots)
        break
      case URL.WHEEL:
        setActive(GameType.Wheel)
        break
      case URL.LIVE:
        setActive(GameType.Live)
        break
      default:
        setActive(GameType.None)
        break
    }
  }, [path])

  return (
    <>
      <div className="relative">
        <button
          className={`tr-c group flex h-[42px] items-center gap-[12px] rounded-[4px] px-[14px] ${
            mobile ? (openGames ? "bg-red-dark-2" : "bg-grey-med-4 hover:bg-red-dark-2") : ""
          }`}
          onClick={() => setOpenGames(!openGames)}
        >
          <div className="h-[24px] w-[24px]">
            {
              {
                [GameType.None]: (
                  <IconGames
                    className={`tr-c h-[24px] w-[24px] fill-current ${
                      openGames ? "text-red" : "text-grey-light group-hover:text-red"
                    }`}
                  />
                ),
                [GameType.Coinflip]: (
                  <IconCoinflip
                    className={`tr-c h-[24px] w-[24px] fill-current ${
                      openGames ? "text-red" : "text-grey-light group-hover:text-red"
                    }`}
                  />
                ),
                [GameType.Jackpot]: (
                  <IconJackpot
                    className={`tr-c h-[24px] w-[24px] fill-current ${
                      openGames ? "text-red" : "text-grey-light group-hover:text-red"
                    }`}
                  />
                ),
                [GameType.Slots]: (
                  <IconSlots
                    className={`tr-c h-[24px] w-[24px] fill-current ${
                      openGames ? "text-red" : "text-grey-light group-hover:text-red"
                    }`}
                  />
                ),
                [GameType.Wheel]: (
                  <IconWheel
                    className={`tr-c h-[24px] w-[24px] fill-current ${
                      openGames ? "text-red" : "text-grey-light group-hover:text-red"
                    }`}
                  />
                ),
                [GameType.Live]: (
                  <IconLive
                    className={`tr-c h-[24px] w-[24px] fill-current ${
                      openGames ? "text-red" : "text-grey-light group-hover:text-red"
                    }`}
                  />
                )
              }[active]
            }
          </div>
          <div
            className={`tr-c text-[16px] font-bold  ${
              openGames ? "text-white" : "text-grey-light group-hover:text-white"
            }`}
          >
            {
              {
                [GameType.None]: "Games",
                [GameType.Jackpot]: "Jackpot",
                [GameType.Coinflip]: "Coinflip",
                [GameType.Slots]: "Slots",
                [GameType.Wheel]: "Wheel",
                [GameType.Live]: "Live Games"
              }[active]
            }
          </div>
          <MdKeyboardArrowUp
            className={`tr-a transform text-[18px] ${
              openGames ? "rotate-180 text-red" : "rotate-0 text-grey-light group-hover:rotate-180 group-hover:text-red"
            }`}
          />
        </button>
        <Wrapper open={openGames}>
          <button
            className="fixed top-0 right-0 hidden h-full w-screen bg-grey-med-92 desktop:top-0 desktop:flex desktop:w-full desktop:bg-transparent"
            onClick={() => setOpenGames(false)}
          ></button>
          <div className="absolute top-[70px] -left-[10px] hidden rounded-[4px] bg-grey-dark-2 desktop:flex">
            <div className="absolute top-[4px] left-[28px] hidden h-[22px] w-[22px] translate-y-[-50%] translate-x-[50%] rotate-[45deg] transform rounded-[4px] bg-grey-dark-2 desktop:block"></div>
            <div className="relative w-full">
              <div className="absolute top-0 left-0 h-full w-full rounded-[4px] border-[1px] border-red-24"></div>
              <div className="absolute top-0 left-0 h-full w-full rounded-[4px] bg-red-8 p-[1px]"></div>
              <div className="absolute top-0 left-0 h-full w-full rounded-[4px] bg-gradient-to-t from-transparent to-grey-dark-2"></div>
              <div className="relative grid w-[880px] grid-cols-[1fr,1fr,1fr,auto,1fr,1fr] items-center gap-[12px] overflow-hidden rounded-[4px] p-[12px]">
                <NavSwitcherGame game={games[2]} />
                <NavSwitcherGame game={games[3]} />
                <NavSwitcherGame game={games[4]} />
                <div className="h-[116px] w-[1px] bg-gradient-to-b from-grey-dark-2 via-red-24 to-transparent"></div>
                <NavSwitcherGame game={games[0]} />
                <NavSwitcherGame game={games[1]} />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default NavSwitcher
