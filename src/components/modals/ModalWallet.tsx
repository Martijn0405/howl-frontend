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
import ModalWalletOverlay from "components/modals/elements/ModalWalletOverlay"
import ModalWalletTop from "components/modals/elements/ModalWalletTop"
import Modal from "components/modals/general/Modal"
import ModalBg from "components/modals/general/ModalBg"
import ModalCryptoDeposit from "components/modals/ModalCryptoDeposit"
import ModalCryptoWithdraw from "components/modals/ModalCryptoWithdraw"
import ModalGiftcards from "components/modals/ModalGiftcards"
import ModalSkins from "components/modals/ModalSkins"
import Wrapper from "components/wrapper/Wrapper"
import WrapperModal from "components/wrapper/WrapperModal"
import { CryptoType, SkinType, WalletType } from "libs/enums"
import React, { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import Button from "utils/buttons/Button"
import InputField from "utils/inputs/InputField"

const ModalWallet = ({ open, handler }: { open: boolean; handler: any }) => {
  const wallet = useRef<HTMLDivElement>(null)

  const [code, setCode] = useState("")

  const [openSkins, setOpenSkins] = useState(false)
  const [openGiftcard, setOpenGiftcard] = useState(false)
  const [openDeposit, setOpenDeposit] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)

  const [walletUp, setWalletUp] = useState(false)
  const [upPx, setUpPx] = useState(0)
  const [downPx, setDownPx] = useState(0)

  const [type, setType] = useState<WalletType>(WalletType.Deposit)

  const [skin, setSkin] = useState<SkinType>()
  const [crypto, setCrypto] = useState<CryptoType>()

  const [priceBtc] = useState(35000)
  const [priceEth] = useState(2400)
  const [priceLtc] = useState(140)

  useEffect(() => {
    onDown()
  }, [open])

  useEffect(() => {
    setWalletUp(openSkins || openGiftcard || openDeposit || openWithdraw)
  }, [openSkins, openGiftcard, openDeposit, openWithdraw])

  useEffect(() => {
    const handleResize = () => {
      if (wallet.current) {
        const rect = wallet.current.getBoundingClientRect()

        const newUpPx = rect.top + wallet.current.clientHeight - 124
        const newDownPx = rect.top + wallet.current.clientHeight + 40

        console.log(newUpPx, newDownPx)

        setUpPx(newUpPx)
        setDownPx(newDownPx)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [wallet, open])

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

  const onDown = () => {
    setOpenDeposit(false)
    setOpenGiftcard(false)
    setOpenSkins(false)
    setOpenWithdraw(false)
  }

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
        <Modal open={open} up={walletUp}>
          <ModalBg handler={handler} />
          <div ref={wallet} className="relative w-full">
            <div className="tr-t relative w-full" style={{ transform: `translateY(-${walletUp ? upPx : 0}px)` }}>
              <WrapperModal top={<ModalWalletTop handler={() => handler(false)} handlerType={setType} type={type} />}>
                <div className="grid w-full grid-cols-1 gap-[24px] p-[20px]">
                  <div className="grid w-full grid-cols-1 gap-[12px]">
                    <div className="w-full text-[14px] font-bold text-white">Steam Skins</div>
                    <div className="grid w-full grid-cols-2 gap-[12px] sm:grid-cols-3">
                      <ModalWalletBox handler={() => onSkins(SkinType.Rust)} shade={<ModalShade bg={"bg-red"} />}>
                        <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
                          <img
                            alt=""
                            className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                            src={PatternRed}
                          />
                          <ShapeRed className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                        </div>
                        <ModalWalletBoxInfo text={"Marketplace"} title={"Rust"} />
                      </ModalWalletBox>
                      <Wrapper open={type === WalletType.Deposit}>
                        <ModalWalletBox handler={() => onSkins(SkinType.Csgo)} shade={<ModalShade bg={"bg-yellow"} />}>
                          <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                          <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
                            <img
                              alt=""
                              className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform"
                              src={PatternRed}
                            />
                            <ShapeRed className="absolute top-[50%] left-[50%] max-w-[120px] translate-x-[-50%] translate-y-[-50%] transform" />
                          </div>
                          <ModalWalletBoxInfo text={"Marketplace"} title={"Dota"} />
                        </ModalWalletBox>
                      </Wrapper>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 gap-[12px]">
                    <div className="flex w-full flex-wrap items-center justify-start gap-[12px]">
                      <div className="text-[14px] font-bold text-white">Cryptocurrencies</div>
                      <div className="flex h-[24px] items-center rounded-[4px] bg-green-12 px-[6px] text-[12px] font-semibold text-green">
                        +40%
                      </div>
                    </div>
                    <div className="grid w-full grid-cols-2 gap-[12px] sm:grid-cols-3">
                      <ModalWalletBox handler={() => onCrypto(CryptoType.Btc)} shade={<ModalShade bg={"bg-yellow"} />}>
                        <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                              <span className="text-[12px] font-semibold text-yellow">1 BTC</span> ~ ${priceBtc}
                            </>
                          }
                          title={"Bitcoin"}
                        />
                      </ModalWalletBox>
                      <ModalWalletBox
                        handler={() => onCrypto(CryptoType.Eth)}
                        shade={<ModalShade bg={"bg-blue-light"} />}
                      >
                        <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                              <span className="text-[12px] font-semibold text-blue-light">1 ETH</span> ~ ${priceEth}
                            </>
                          }
                          title={"Ethereum"}
                        />
                      </ModalWalletBox>
                      <ModalWalletBox
                        handler={() => onCrypto(CryptoType.Ltc)}
                        shade={<ModalShade bg={"bg-grey-blue"} />}
                      >
                        <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                              <span className="text-[12px] font-semibold text-grey-blue">1 LTC</span> ~ ${priceLtc}
                            </>
                          }
                          title={"Litecoin"}
                        />
                      </ModalWalletBox>
                    </div>
                  </div>
                  <Wrapper open={type === WalletType.Deposit}>
                    <div className="grid w-full grid-cols-1 gap-[12px]">
                      <div className="flex w-full flex-wrap items-center justify-start gap-[12px]">
                        <div className="text-[14px] font-bold text-white">Giftcards</div>
                        <div className="flex h-[24px] items-center rounded-[4px] bg-green-12 px-[6px] text-[12px] font-semibold text-green">
                          +40%
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-start">
                        <div className="grid w-full max-w-full grid-cols-1 gap-[6px] sm:w-[350px] sm:grid-cols-[1fr,auto] sm:gap-[12px]">
                          <InputField handler={setCode} placeholder={"Enter giftcard redeem code..."} value={code} />
                          <Button active={code ? true : false} handler={onRedeem} title={"Redeem"} />
                        </div>
                      </div>
                      <div className="grid w-full grid-cols-2 gap-[12px] md:grid-cols-4">
                        <ModalWalletBox handler={onGiftcard} shade={<ModalShade bg={"bg-blue-light"} />}>
                          <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                          <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                          <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                          <div className="relative flex h-[64px] w-full items-center justify-center lg:h-[84px]">
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
                  </Wrapper>
                </div>
              </WrapperModal>
              <ModalWalletOverlay handler={onDown} up={walletUp} />
            </div>
          </div>
        </Modal>
        <div
          style={{
            transform: `translateY(${walletUp ? 110 : downPx}px)`,
            height: `calc(100vh - ${walletUp ? 110 : downPx}px)`
          }}
          className="tr-a fixed top-0 left-0 z-40 flex w-full min-w-[330px] justify-center overflow-y-auto px-[12px] sm:px-[20px]"
        >
          <div className="relative w-full">
            <ModalSkins handler={() => setSkin(undefined)} open={openSkins} type={skin} deposit />
            <ModalGiftcards handler={() => setOpenGiftcard(false)} open={openGiftcard} />
            <ModalCryptoDeposit handler={() => setCrypto(undefined)} open={openDeposit} type={crypto} />
            <ModalCryptoWithdraw handler={() => setCrypto(undefined)} open={openWithdraw} type={crypto} />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default ModalWallet
