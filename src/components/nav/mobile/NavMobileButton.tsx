import React from "react"
import { Link } from "react-router-dom"

const NavMobileButton = ({ icon, handler, link }: { icon: JSX.Element; handler: any; link?: boolean }) => {
  return (
    <>
      {link ? (
        <Link
          className="tr-c group flex h-42 w-42 items-center justify-center rounded-4 border-1 border-grey-med-4 hover:bg-grey-med-4"
          to={handler}
        >
          {icon}
        </Link>
      ) : (
        <button
          className=" tr-c group flex h-42 w-42 items-center justify-center rounded-4 border-1 border-grey-med-4 hover:bg-grey-med-4"
          onClick={handler}
        >
          {icon}
        </button>
      )}
    </>
  )
}

export default NavMobileButton
