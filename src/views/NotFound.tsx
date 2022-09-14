import { SLUG, URL } from "libs/constants"
import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found {SLUG}</title>
      </Helmet>
      <Link
        className="flex h-[100vh] w-full items-center justify-center bg-grey-med text-24 font-semibold text-white"
        to={URL.HOME}
      >
        404
      </Link>
    </>
  )
}

export default NotFound
