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
        className="relative w-full overflow-hidden rounded-6 pt-[67%]"
        to={game.link}
        onClick={() => setOpenGames(false)}
      >
        {
          {
            [GameType.Coinflip]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-6 border-1 border-coinflip-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-6 bg-gradient-to-t from-coinflip to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Jackpot]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-6 border-1 border-jackpot-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-6 bg-gradient-to-t from-jackpot to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Live]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-6 border-1 border-live-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-6 bg-gradient-to-t from-live to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Slots]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-6 border-1 border-slots-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-6 bg-gradient-to-t from-slots to-transparent opacity-[.4]"></div>
              </>
            ),
            [GameType.Wheel]: (
              <>
                <div className="absolute top-0 left-0 h-full w-full rounded-6 border-1 border-wheel-dark"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-grey-med"></div>
                <img alt="" className="absolute top-0 left-0 h-full w-full object-cover" src={game.banner} />
                <div className="absolute bottom-1 left-1 right-1 h-50 rounded-b-6 bg-gradient-to-t from-wheel to-transparent opacity-[.4]"></div>
              </>
            )
          }[game.type]
        }
        <div className="absolute top-8 right-8">
          {game.new ? (
            <div className="absolute top-0 right-0 flex h-20 items-center rounded-4 border-1 border-red bg-red-24 px-6 text-10 font-bold text-white">
              NEW
            </div>
          ) : game.hot ? (
            <div className="absolute top-0 right-0 flex h-20 items-center rounded-4 border-1 border-wheel-dark bg-wheel-dark-24 px-6 text-10 font-bold text-wheel-light">
              HOT
            </div>
          ) : (
            <div className="absolute top-0 right-0 flex h-20 items-center rounded-4 border-1 border-purple-light bg-purple-dark px-6 text-10 font-bold text-white">
              $0
            </div>
          )}
        </div>
        <div className=" absolute bottom-1 left-1 right-1 flex items-center justify-center gap-8 px-8 py-6">
          {game.icon}
          <div className="pt-2 text-14 font-semibold text-white">{game.title}</div>
        </div>
      </Link>
    </>
  )
}

export default NavSwitcherGame
