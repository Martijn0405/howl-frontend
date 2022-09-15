import ModalMobile from "components/modals/general/ModalMobile"
import Wrapper from "components/wrapper/Wrapper"
import { GameInterface } from "libs/interfaces"
import React, { useState } from "react"

const ModalGames = ({ open, handler }: { open: boolean; handler: any }) => {
  const [games] = useState<GameInterface[]>([
    {
      title: "",
      icon: <></>,
      banner: "",
      new: true,
      shade: <></>
    }
  ])

  return (
    <>
      <Wrapper open={open}>
        <ModalMobile handler={handler}>
          <div className="grid w-full grid-cols-2 gap-12 p-24">
            {games.map((game, key) => (
              <div key={key} className="relative w-full overflow-hidden rounded-4"></div>
            ))}
          </div>
        </ModalMobile>
      </Wrapper>
    </>
  )
}

export default ModalGames
