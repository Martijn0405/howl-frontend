export function openLink(event: any, link: string) {
  event.preventDefault()
  window.open(link)
}

export function openLinkExtern(link: string) {
  window.open(link)
}
