import { useEffect } from "react"

const useScript = (url, position, async) => {
  useEffect(() => {
    const placement = document.querySelector(position)
    const script = document.createElement("script");

    script.data-ad-client = "ca-pub-1063328225356164";
    script.src = url
    script.async = typeof async === "undefined" ? true : async

    placement.appendChild(script)

    return () => {
      placement.removeChild(script)
    }
  }, [url])
}

export default useScript
