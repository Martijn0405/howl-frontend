import { NotificationTabType, SkinRarityType, WalletType } from "libs/enums"

export interface GameInterface {
  title: string
  icon: JSX.Element
  banner: string
  new?: boolean
  amount?: number
  hot?: boolean
  shade: JSX.Element
}

export interface GiftcardInterface {
  image: string
  amount: number
}

export interface LanguageInterface {
  title: string
  code: string
  icon: JSX.Element
}

export interface LinkInterface {
  title: string
  link: string
  action?: any
  icon?: JSX.Element
  new?: number
}

export interface MessageInterface {
  id: number
  avatar: string
  name: string
  date: string
  message: string
  level: number
  type: string
  reply?: MessageInterface
}

export interface NotificationTabInterface {
  title: string
  type: NotificationTabType
}

export interface SkinInterface {
  name: string
  description: string
  price: number
  stack: number
  image: string
  type: SkinRarityType
}

export interface UserInterface {
  avatar: string
  username: string
}

export interface WalletInterface {
  title: string
  type: WalletType
}
