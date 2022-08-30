import { ReactComponent as Btc } from "assets/img/btc.svg"
import { ReactComponent as Eth } from "assets/img/eth.svg"
import { ReactComponent as Ltc } from "assets/img/ltc.svg"
import PatternBlue from "assets/img/patterns/pattern_blue.png"
import PatternBlueLight from "assets/img/patterns/pattern_blue_light.png"
import PatternGrey from "assets/img/patterns/pattern_grey.png"
import PatternRed from "assets/img/patterns/pattern_red.png"
import PatternYellow from "assets/img/patterns/pattern_yellow.png"
import { ReactComponent as ShapeBlue } from "assets/img/shapes/shape_blue.svg"
import { ReactComponent as ShapeBlueLight } from "assets/img/shapes/shape_blue_light.svg"
import { ReactComponent as ShapeGrey } from "assets/img/shapes/shape_grey.svg"
import { ReactComponent as ShapeRed } from "assets/img/shapes/shape_red.svg"
import { ReactComponent as ShapeYellow } from "assets/img/shapes/shape_yellow.svg"
import ModalShade from "components/modals/elements/ModalShade"
import ModalWalletBox from "components/modals/elements/ModalWalletBox"
import ModalWalletBoxCrypto from "components/modals/elements/ModalWalletBoxCrypto"
import ModalWalletBoxInfo from "components/modals/elements/ModalWalletBoxInfo"
import ModalWalletTop from "components/modals/elements/ModalWalletTop"
import Modal from "components/modals/Modal"
import ModalCryptoDeposit from "components/modals/ModalCryptoDeposit"
import ModalCryptoWithdraw from "components/modals/ModalCryptoWithdraw"
import ModalGiftcards from "components/modals/ModalGiftcards"
import ModalSkins from "components/modals/ModalSkins"
import Wrapper from "components/wrapper/Wrapper"
import WrapperModal from "components/wrapper/WrapperModal"
import { CryptoType, SkinType, WalletType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Button from "utils/buttons/Button"
import InputField from "utils/inputs/InputField"

const ModalWallet = ({ open, handler }: { open: boolean; handler: any }) => {
  const [code, setCode] = useState("")

  const [openSkins, setOpenSkins] = useState(false)
  const [openGiftcard, setOpenGiftcard] = useState(false)
  const [openDeposit, setOpenDeposit] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)

  const [type, setType] = useState<WalletType>(WalletType.Deposit)

  const [skin, setSkin] = useState<SkinType>()
  const [crypto, setCrypto] = useState<CryptoType>()

  const [priceBtc] = useState(35000)
  const [priceEth] = useState(2400)
  const [priceLtc] = useState(140)

  useEffect(() => {
    if (skin === undefined) {
      setOpenSkins(false)
    } else {
      setOpenSkins(true)
    }
  }, [skin])

  useEffect(() => {
    if (crypto === undefined) {
      setOpenDeposit(false)
      setOpenWithdraw(false)
    } else {
      if (type === WalletType.Deposit) {
        setOpenDeposit(true)
        setOpenWithdraw(false)
      } else {
        setOpenDeposit(false)
        setOpenWithdraw(true)
      }
    }
  }, [crypto])

  useEffect(() => {
    if (!openSkins && skin !== undefined) {
      setSkin(undefined)
      handler(true)
    }
  }, [openSkins])

  useEffect(() => {
    if (!openDeposit && crypto !== undefined) {
      setCrypto(undefined)
      handler(true)
    }
  }, [openDeposit])

  useEffect(() => {
    if (!openWithdraw && crypto !== undefined) {
      setCrypto(undefined)
      handler(true)
    }
  }, [openWithdraw])

  const onRedeem = () => {
    if (!code) {
      toast.error("Enter a code")
      return
    }

    console.log("Redeem")
  }

  const onCrypto = (newCrypto: CryptoType) => {
    setCrypto(newCrypto)

    if (type === WalletType.Deposit) {
      setOpenDeposit(true)
    } else {
      setOpenWithdraw(true)
    }
  }

  const onSkins = (newSkin: SkinType) => {
    setSkin(newSkin)
  }

  const onGiftcard = () => {
    setOpenGiftcard(true)
  }

  return (
    <>
      <Wrapper open={open}>
        <Modal handler={handler} open={open}>
          <WrapperModal top={<ModalWalletTop handler={handler} handlerType={setType} type={type} />}>
            <div className="grid w-full grid-cols-1 gap-24 p-20">
              <div className="grid w-full grid-cols-1 gap-12">
                <div className="w-full text-14 font-bold text-white">Steam Skins</div>
                <div className="grid w-full grid-cols-2 gap-12 sm:grid-cols-3">
                  <ModalWalletBox handler={() => onSkins(SkinType.Rust)} shade={<ModalShade bg={"bg-red"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternRed}
                      />
                      <ShapeRed className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                    </div>
                    <ModalWalletBoxInfo text={"Marketplace"} title={"Rust"} />
                  </ModalWalletBox>
                  <ModalWalletBox handler={() => onSkins(SkinType.Csgo)} shade={<ModalShade bg={"bg-yellow"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternYellow}
                      />
                      <ShapeYellow className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                    </div>
                    <ModalWalletBoxInfo text={"Marketplace"} title={"CS:GO"} />
                  </ModalWalletBox>
                  <ModalWalletBox handler={() => onSkins(SkinType.Dota)} shade={<ModalShade bg={"bg-red"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternRed}
                      />
                      <ShapeRed className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                    </div>
                    <ModalWalletBoxInfo text={"Marketplace"} title={"Dota"} />
                  </ModalWalletBox>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-12">
                <div className="flex w-full flex-wrap items-center justify-start gap-12">
                  <div className="text-14 font-bold text-white">Cryptocurrencies</div>
                  <div className="flex h-24 items-center rounded-4 bg-green-12 px-6 text-12 font-semibold text-green">
                    +40%
                  </div>
                </div>
                <div className="grid w-full grid-cols-2 gap-12 sm:grid-cols-3">
                  <ModalWalletBox handler={() => onCrypto(CryptoType.Btc)} shade={<ModalShade bg={"bg-yellow"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternYellow}
                      />
                      <ShapeYellow className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                      <Btc className="relative h-[56px] w-[56px]" />
                    </div>
                    <ModalWalletBoxCrypto
                      crypto={
                        <>
                          <span className="text-12 font-semibold text-yellow">1 BTC</span> ~ ${priceBtc}
                        </>
                      }
                      title={"Bitcoin"}
                    />
                  </ModalWalletBox>
                  <ModalWalletBox handler={() => onCrypto(CryptoType.Eth)} shade={<ModalShade bg={"bg-blue-light"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternBlue}
                      />
                      <ShapeBlue className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                      <Eth className="relative h-[56px] w-[56px]" />
                    </div>
                    <ModalWalletBoxCrypto
                      crypto={
                        <>
                          <span className="text-12 font-semibold text-blue-light">1 ETH</span> ~ ${priceEth}
                        </>
                      }
                      title={"Ethereum"}
                    />
                  </ModalWalletBox>
                  <ModalWalletBox handler={() => onCrypto(CryptoType.Ltc)} shade={<ModalShade bg={"bg-grey-blue"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternGrey}
                      />
                      <ShapeGrey className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                      <Ltc className="relative h-[56px] w-[56px]" />
                    </div>
                    <ModalWalletBoxCrypto
                      crypto={
                        <>
                          <span className="text-12 font-semibold text-grey-blue">1 LTC</span> ~ ${priceLtc}
                        </>
                      }
                      title={"Litecoin"}
                    />
                  </ModalWalletBox>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-12">
                <div className="w-full text-14 font-bold text-white">Giftcards</div>
                <div className="flex w-full items-center justify-start">
                  <div className="grid w-full max-w-full grid-cols-1 gap-6 sm:w-[350px] sm:grid-cols-[1fr,auto] sm:gap-12">
                    <InputField handler={setCode} placeholder={"Enter giftcard redeem code..."} value={code} />
                    <Button handler={onRedeem} title={"Redeem"} />
                  </div>
                </div>
                <div className="grid w-full grid-cols-2 gap-12 md:grid-cols-4">
                  <ModalWalletBox handler={onGiftcard} shade={<ModalShade bg={"bg-blue-light"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternBlue}
                      />
                      <ShapeBlue className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                    </div>
                    <ModalWalletBoxInfo text={"Kinguin"} title={"Visa"} />
                  </ModalWalletBox>
                  <ModalWalletBox handler={onGiftcard} shade={<ModalShade bg={"bg-blue-light-2"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternBlueLight}
                      />
                      <ShapeBlueLight className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                    </div>
                    <ModalWalletBoxInfo text={"Kinguin"} title={"PaySafe"} />
                  </ModalWalletBox>
                  <ModalWalletBox handler={onGiftcard} shade={<ModalShade bg={"bg-blue-light"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternBlue}
                      />
                      <ShapeBlue className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                    </div>
                    <ModalWalletBoxInfo text={"Kinguin"} title={"PayPal"} />
                  </ModalWalletBox>
                  <ModalWalletBox handler={onGiftcard} shade={<ModalShade bg={"bg-red"} />}>
                    <div className="relative flex h-64 w-full items-center justify-center lg:h-84">
                      <img
                        alt=""
                        className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                        src={PatternRed}
                      />
                      <ShapeRed className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                    </div>
                    <ModalWalletBoxInfo text={"Kinguin"} title={"GPay"} />
                  </ModalWalletBox>
                </div>
              </div>
            </div>
          </WrapperModal>
        </Modal>
      </Wrapper>
      {skin !== undefined ? <ModalSkins handler={setOpenSkins} open={openSkins} type={skin} deposit /> : ""}
      <ModalGiftcards handler={setOpenGiftcard} open={openGiftcard} />
      {crypto !== undefined ? (
        <>
          <ModalCryptoDeposit handler={setOpenDeposit} open={openDeposit} type={crypto} />
          <ModalCryptoWithdraw handler={setOpenWithdraw} open={openWithdraw} type={crypto} />
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default ModalWallet
