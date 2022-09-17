import { useModal } from "contexts/ModalContext"
import { GameType } from "libs/enums"
import { GameInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const NavSwitcherGame = ({ game }: { game: GameInterface }) => {
  const { setOpenGames } = useModal()

  return (
    <>
      <Link
        className="group relative w-full overflow-hidden rounded-[6px] pt-[67%]"
        to={game.link}
        onClick={() => setOpenGames(false)}
      >
        {
          {
            [GameType.None]: <></>,
            [GameType.Coinflip]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-coinflip-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
              </>
            ),
            [GameType.Jackpot]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-jackpot-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
              </>
            ),
            [GameType.Live]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-live-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
              </>
            ),
            [GameType.Slots]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-slots-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
              </>
            ),
            [GameType.Wheel]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-wheel-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
              </>
            )
          }[game.type]
        }
        <div className="absolute bottom-[1px] left-[1px] right-[1px] h-[36px] overflow-hidden rounded-b-6">
          <div className="h-full w-full bg-black-24 blur-[25px] backdrop-filter"></div>
        </div>
        <div className="absolute top-[8px] right-[8px]">
          {game.new ? (
            <div className="absolute top-0 right-0 flex h-[20px] items-center rounded-[4px] bg-red px-[6px] text-[10px] font-bold text-white">
              NEW
            </div>
          ) : game.hot ? (
            <div className="absolute top-0 right-0 flex h-[20px] items-center rounded-[4px] bg-wheel-dark-24 px-[6px] text-[10px] font-bold text-wheel-light">
              HOT
            </div>
          ) : (
            <div className="tr-c absolute top-0 right-0 flex h-[20px] items-center rounded-[4px] border-[1px] border-purple-light bg-purple-dark px-[6px] text-[10px] font-bold text-grey-light-4 group-hover:border-red group-hover:text-white">
              $0
            </div>
          )}
        </div>
        <div className=" absolute bottom-[1px] left-[1px] right-[1px] flex items-center justify-center gap-[8px] px-[8px] py-[6px]">
          {game.icon}
          <div className="pt-2 text-[14px] font-semibold text-white">{game.title}</div>
        </div>
      </Link>
    </>
  )
}

export default NavSwitcherGame
