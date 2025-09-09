import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "virtual:windi.css"

function App() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[800px] rotate-x-[45deg] bg-black rounded-full border-[10px] border-black shadow-[0_1px_0_#444,0_2px_0_#444,0_3px_0_#444,0_4px_0_#444,0_5px_0_#444,0_6px_0_#444,0_7px_0_#444,0_8px_0_#444,0_9px_0_#444,0_10px_0_#444,0_11px_0_#444,0_12px_0_#444]">
      <div className="relative w-[200px] h-[200px] rounded-full border-b-[100px] border-white animate-[girar_4s_linear_infinite]">
        <div className="absolute top-1/2 left-0 w-[20px] h-[20px] rounded-full bg-white border-[40px] border-black -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[20px] h-[20px] rounded-full bg-black border-[40px] border-white -translate-y-1/2"></div>
      </div>
    </div>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)

const style = document.createElement("style")
style.textContent = `
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @keyframes girar {
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
`
document.head.appendChild(style)
