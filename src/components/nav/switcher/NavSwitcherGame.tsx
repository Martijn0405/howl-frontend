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
        className="relative w-full overflow-hidden rounded-[6px] pt-[67%]"
        to={game.link}
        onClick={() => setOpenGames(false)}
      >
        {
          {
            [GameType.Coinflip]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-coinflip-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-[1px] left-[1px] right-[1px] h-[50px] rounded-b-6 bg-gradient-to-t from-coinflip to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Jackpot]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-jackpot-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-[1px] left-[1px] right-[1px] h-[50px] rounded-b-6 bg-gradient-to-t from-jackpot to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Live]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-live-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-[1px] left-[1px] right-[1px] h-[50px] rounded-b-6 bg-gradient-to-t from-live to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Slots]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-slots-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-[1px] left-[1px] right-[1px] h-[50px] rounded-b-6 bg-gradient-to-t from-slots to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Wheel]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-wheel-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-[1px] left-[1px] right-[1px] h-[50px] rounded-b-6 bg-gradient-to-t from-wheel to-transparent opacity-[.4]"></div>
              </>
            )
          }[game.type]
        }
        <div className="absolute top-[8px] right-[8px]">
          {game.new ? (
            <div className="absolute top-0 right-0 flex h-[20px] items-center rounded-[4px] border-[1px] border-red bg-red-24 px-[6px] text-[10px] font-bold text-white">
              NEW
            </div>
          ) : game.hot ? (
            <div className="absolute top-0 right-0 flex h-[20px] items-center rounded-[4px] border-[1px] border-wheel-dark bg-wheel-dark-24 px-[6px] text-[10px] font-bold text-wheel-light">
              HOT
            </div>
          ) : (
            <div className="absolute top-0 right-0 flex h-[20px] items-center rounded-[4px] border-[1px] border-purple-light bg-purple-dark px-[6px] text-[10px] font-bold text-white">
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
