import { ReactComponent as IconChat } from "assets/img/chat.svg"
import { ReactComponent as Jackpot } from "assets/img/gamemodes/jackpot.svg"
import { ReactComponent as IconHome } from "assets/img/home.svg"
import NavMobileButton from "components/nav/mobile/NavMobileButton"
import { useModal } from "contexts/ModalContext"
import { URL } from "libs/constants"
import React from "react"
import { MdKeyboardArrowUp } from "react-icons/md"

const NavMobileBottom = ({ handlerChat }: { handlerChat: any }) => {
  const { openGames, setOpenGames } = useModal()

  return (
    <>
      <div className="fixed bottom-0 left-0 z-30 flex h-72 w-full items-center justify-between gap-12 bg-grey-med-2 px-24 py-12 xl:hidden">
        <NavMobileButton
          handler={handlerChat}
          icon={<IconChat className="tr-c fill-current text-grey-med-7 group-hover:text-white" />}
        />
        <button
          className={`tr-c group flex h-42 items-center gap-12 rounded-4 px-14 ${
            openGames ? "bg-red-dark-2" : "bg-grey-med-4 hover:bg-red-dark-2"
          }`}
          onClick={() => setOpenGames(!openGames)}
        >
          <div className="h-24 w-24">
            <Jackpot
              className={`tr-c h-24 w-24 fill-current ${
                openGames ? "text-red" : "text-grey-light group-hover:text-red"
              }`}
            />
          </div>
          <div
            className={`tr-c text-16 font-bold  ${openGames ? "text-white" : "text-grey-light group-hover:text-white"}`}
          >
            Jackpot
          </div>
          <MdKeyboardArrowUp
            className={`tr-a transform text-18 ${
              openGames ? "rotate-180 text-red" : "rotate-0 text-grey-light group-hover:rotate-180 group-hover:text-red"
            }`}
          />
        </button>
        <NavMobileButton
          handler={URL.HOME}
          icon={<IconHome className="tr-c fill-current text-grey-med-7 group-hover:text-white" />}
          link
        />
      </div>
    </>
  )
}

export default NavMobileBottom
