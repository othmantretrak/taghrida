import { useEffect } from "react"

const useScript = (url, position) => {
  useEffect(() => {
    const placement = document.querySelector(position)
    const script = document.createElement("script")

    script.setAttribute("data-ad-client", "ca-pub-1063328225356164")
    //script.data-ad-client = "ca-pub-1063328225356164";
    script.src = url
    script.async = true

    placement.appendChild(script)

    return () => {
      placement.removeChild(script)
    }
  }, [url])
}

export default useScript
