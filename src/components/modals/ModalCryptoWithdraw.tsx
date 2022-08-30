import { ReactComponent as Btc } from "assets/img/btc.svg"
import { ReactComponent as BtcBlur } from "assets/img/btc_blur.svg"
import { ReactComponent as Coin } from "assets/img/coin.svg"
import { ReactComponent as Eth } from "assets/img/eth.svg"
import { ReactComponent as EthBlur } from "assets/img/eth_blur.svg"
import { ReactComponent as Ltc } from "assets/img/ltc.svg"
import { ReactComponent as LtcBlur } from "assets/img/ltc_blur.svg"
import PatternBlue from "assets/img/patterns/pattern_blue.png"
import PatternGrey from "assets/img/patterns/pattern_grey.png"
import PatternYellow from "assets/img/patterns/pattern_yellow.png"
import { ReactComponent as ShapeBlue } from "assets/img/shapes/shape_blue.svg"
import { ReactComponent as ShapeGrey } from "assets/img/shapes/shape_grey.svg"
import { ReactComponent as ShapeYellow } from "assets/img/shapes/shape_yellow.svg"
import ModalCryptoBalance from "components/modals/elements/ModalCryptoBalance"
import ModalCryptoTop from "components/modals/elements/ModalCryptoTop"
import Modal from "components/modals/Modal"
import WrapperModal from "components/wrapper/WrapperModal"
import { CryptoType } from "libs/enums"
import React, { useState } from "react"
import { toast } from "react-toastify"
import Button from "utils/buttons/Button"

const ModalCryptoWithdraw = ({ open, handler, type }: { open: boolean; handler: any; type: CryptoType }) => {
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState(0)

  const [balance] = useState(1000)

  const onMax = () => {
    setAmount(balance)
  }

  const onWithdraw = () => {
    if (!address) {
      toast.error("Enter an address")
      return
    }

    if (!amount) {
      toast.error("Enter an amount")
      return
    }

    if (amount > balance) {
      toast.error("Insufficient funds")
      return
    }

    console.log("Withdraw")
  }

  return (
    <>
      <Modal handler={handler} open={open}>
        <WrapperModal top={<ModalCryptoTop handler={handler} type={type} />}>
          <div className="grid w-full grid-cols-1 gap-24 overflow-hidden p-20 md:grid-cols-[auto,1fr]">
            <div className="flex w-full justify-center lg:w-auto">
              <div className="relative flex h-[150px] w-[150px] items-center">
                {
                  {
                    [CryptoType.Btc]: (
                      <>
                        <BtcBlur className="absolute left-[30%] top-[65%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] scale-75 transform" />
                        <img
                          alt=""
                          className="absolute top-[50%] left-[50%] w-[200px] max-w-[200px] translate-x-[-50%] translate-y-[-50%] transform"
                          src={PatternYellow}
                        />
                        <ShapeYellow className="absolute left-[50%] top-[50%] h-[140px] w-[140px] translate-x-[-50%] translate-y-[-50%] transform" />
                        <Btc className="absolute left-[62%] top-[38%] h-[120px] w-auto translate-x-[-50%] translate-y-[-50%] transform" />
                      </>
                    ),
                    [CryptoType.Eth]: (
                      <>
                        <EthBlur className="absolute left-[30%] top-[65%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform" />
                        <img
                          alt=""
                          className="absolute top-[50%] left-[50%] w-[200px] max-w-[200px] translate-x-[-50%] translate-y-[-50%] transform"
                          src={PatternBlue}
                        />
                        <ShapeBlue className="absolute left-[50%] top-[50%] h-[140px] w-[140px] translate-x-[-50%] translate-y-[-50%] transform" />
                        <Eth className="absolute left-[62%] top-[38%] h-[120px] w-auto translate-x-[-50%] translate-y-[-50%] transform" />
                      </>
                    ),
                    [CryptoType.Ltc]: (
                      <>
                        <LtcBlur className="absolute left-[30%] top-[65%] h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] transform" />
                        <img
                          alt=""
                          className="absolute top-[50%] left-[50%] w-[200px] max-w-[200px] translate-x-[-50%] translate-y-[-50%] transform"
                          src={PatternGrey}
                        />
                        <ShapeGrey className="absolute left-[50%] top-[50%] h-[140px] w-[140px] translate-x-[-50%] translate-y-[-50%] transform" />
                        <Ltc className="absolute left-[62%] top-[38%] h-[120px] w-auto translate-x-[-50%] translate-y-[-50%] transform" />
                      </>
                    )
                  }[type]
                }
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-16 sm:gap-36">
              <div className="grid w-full grid-cols-1 gap-12">
                <div className="grid w-full grid-cols-1 gap-8">
                  <div className="w-full text-12 font-bold text-white">
                    {
                      {
                        [CryptoType.Btc]: "BTC",
                        [CryptoType.Eth]: "ETH",
                        [CryptoType.Ltc]: "LTC"
                      }[type]
                    }{" "}
                    Withdraw Address
                  </div>
                  <div className="flex h-44 w-full items-start rounded-4 bg-black-32 shadow-md">
                    <div className="tr-h grid h-42 w-full grid-cols-[auto,1fr] items-center gap-12 rounded-4 border-1 border-grey-med-4 bg-grey-med-2 p-4 group-hover:h-44">
                      <div className="flex h-32 w-32 items-center justify-center">
                        {
                          {
                            [CryptoType.Btc]: <Btc className="h-32" />,
                            [CryptoType.Eth]: <Eth className="h-32" />,
                            [CryptoType.Ltc]: <Ltc className="h-32" />
                          }[type]
                        }
                      </div>
                      <input
                        className="w-full text-left text-14 font-semibold text-white"
                        placeholder="Paste withdraw address..."
                        type={"text"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-[1fr,auto]">
                  <div className="grid w-full grid-cols-1 gap-8">
                    <div className="flex w-full flex-wrap justify-between gap-x-12 gap-y-4">
                      <div className="text-12 font-bold text-white">Withdrawal Amount</div>
                      <div className="flex md:hidden">
                        <ModalCryptoBalance balance={balance} type={type} />
                      </div>
                    </div>
                    <div className="flex h-44 w-full items-start rounded-4 bg-black-32 shadow-md">
                      <div className="tr-h grid h-42 w-full grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 border-1 border-grey-med-4 bg-grey-med-2 p-4 group-hover:h-44">
                        <div className="flex h-32 w-32 items-center justify-center">
                          <Coin className="w-32" />,
                        </div>
                        <input
                          className="w-full text-left text-14 font-semibold text-white"
                          max={balance}
                          min={0}
                          placeholder="Paste withdraw address..."
                          type={"number"}
                          value={isNaN(amount) ? "" : amount}
                          onChange={(e) => setAmount(parseInt(e.target.value))}
                        />
                        <button className="group flex h-28 items-start rounded-4 bg-grey-med" onClick={onMax}>
                          <div className="tr-h flex h-26 w-full items-center rounded-4 bg-grey-med-6 px-10 text-14 font-semibold text-white group-hover:h-28">
                            Max
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="hidden md:flex">
                      <ModalCryptoBalance balance={balance} type={type} />
                    </div>
                    <Button handler={onWithdraw} title={"Withdraw"} full />
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-8">
                <div className="flex w-full justify-start">
                  <div className="flex h-24 items-center gap-6 rounded-4 bg-grey-light-5-12 px-8 text-12 font-semibold text-grey-light">
                    Network Fee: <span className="text-12 font-semibold text-white">$0.73</span>
                  </div>
                </div>
                <div className="flex w-full justify-start">
                  <div className="w-full max-w-[400px] text-12 italic text-grey-light-5">
                    *The value subtracted from your balance may vary between now and the time we process your withdrawal
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t-1 border-grey-med-5 p-20">
            <div className="relative flex h-0 w-full justify-center">
              <button className="group flex h-36 items-start rounded-4 bg-black-32">
                <div className="tr-h flex h-34 w-full items-center rounded-4 bg-grey-med-4 px-12 text-12 font-bold text-grey-light-4 group-hover:h-36">
                  View All{" "}
                  {
                    {
                      [CryptoType.Btc]: "BTC",
                      [CryptoType.Eth]: "ETH",
                      [CryptoType.Ltc]: "LTC"
                    }[type]
                  }{" "}
                  Transactions
                </div>
              </button>
            </div>
          </div>
        </WrapperModal>
      </Modal>
    </>
  )
}

export default ModalCryptoWithdraw
