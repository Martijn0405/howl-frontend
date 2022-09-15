import ModalGiftcardsTop from "components/modals/elements/ModalGiftcardsTop"
import ModalBody from "components/modals/ModalBody"
import WrapperModal from "components/wrapper/WrapperModal"
import React from "react"

const ModalCasino = ({ open, handler }: { open: boolean; handler: any }) => {
  return (
    <>
      <ModalBody open={open}>
        <WrapperModal top={<ModalGiftcardsTop handler={handler} />}>
          <div className="grid w-full grid-cols-1 gap-26 p-20"></div>
        </WrapperModal>
      </ModalBody>
    </>
  )
}

export default ModalCasino
