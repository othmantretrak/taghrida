import React, { useEffect } from "react"

const BannerAd = () => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width: "728px", height: "90px" }}
      data-ad-client="ca-pub-1063328225356164"
      data-ad-slot="1862075576"
    ></ins>
  )
}

export default BannerAd
