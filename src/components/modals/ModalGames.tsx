import BannerCoinflip from "assets/img/gamemodes/coinflip.png"
import { ReactComponent as IconCoinflip } from "assets/img/gamemodes/coinflip.svg"
import BannerJackpot from "assets/img/gamemodes/jackpot.png"
import { ReactComponent as IconJackpot } from "assets/img/gamemodes/jackpot.svg"
import { ReactComponent as IconLive } from "assets/img/gamemodes/live.svg"
import BannerSlots from "assets/img/gamemodes/slots.png"
import { ReactComponent as IconSlots } from "assets/img/gamemodes/slots.svg"
import { ReactComponent as IconWheel } from "assets/img/gamemodes/wheel.svg"
import ModalMobile from "components/modals/general/ModalMobile"
import NavSwitcherGame from "components/nav/switcher/NavSwitcherGame"
import Wrapper from "components/wrapper/Wrapper"
import { URL } from "libs/constants"
import { GameType } from "libs/enums"
import { GameInterface } from "libs/interfaces"
import React, { useState } from "react"

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
              <NavSwitcherGame key={key} game={game} />
            ))}
          </div>
        </ModalMobile>
      </Wrapper>
    </>
  )
}

export default ModalGames
