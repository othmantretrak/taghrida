import React, { useEffect } from "react"

const BannerAd = () => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", height: "92px" }}
      data-ad-client="ca-pub-1063328225356164"
      data-ad-slot="1862075576"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default BannerAd
