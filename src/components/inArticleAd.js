import React, { Component } from "react"

class InArticleAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
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
}

export default InArticleAd
