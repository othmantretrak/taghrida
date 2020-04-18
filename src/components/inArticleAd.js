import React, { useEffect } from "react"

const InArticleAd = () => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-1063328225356164"
      data-ad-slot="2120056211"
    ></ins>
  )
}

export default InArticleAd
