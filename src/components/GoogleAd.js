import React from "react"

export default ({ client, slot, format = "auto" }) => (
  <div>
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout="in-article"
    />
  </div>
)
